import { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  REMOVE_CATEGORY,
} from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import Auth from "../../utils/auth";
import { DELETE_CATEGORY } from "../../utils/mutations";

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  const [deleteCategory, { error }] = useMutation(DELETE_CATEGORY, {
    refetchQueries: [QUERY_CATEGORIES, "categories"],
  });

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  const handleDelete = async (id) => {
    dispatch({
      type: REMOVE_CATEGORY,
      deleteCategory: id,
    });
    const { data } = await deleteCategory({
      variables: {
        categoryId: id,
      },
    });
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <div key={item._id}>
          <button
            onClick={() => {
              handleClick(item._id);
            }}
          >
            {item.categoryName}
          </button>
          <button
            onClick={() => {
              handleDelete(item._id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
      <button
        onClick={() => {
          handleClick("");
        }}
      >
        All
      </button>
    </div>
  );
}

export default CategoryMenu;

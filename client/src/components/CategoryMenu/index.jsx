import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import Auth from "../../utils/auth";

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

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

  const handleDelete = (id) => {
    dispatch({
      type: DELETE_CATEGORY,
      deleteCategory: "",
    });
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <div>
          <button
            key={item._id}
            onClick={() => {
              handleClick(item._id);
            }}
          >
            {item.categoryName}
          </button>
          <button
            key={item._id}
            onclick={() => {
              handleDelete(item._id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
      {/* {categories.map((item) => (
        <button
          key={item._id}
          onclick={() => {
            delete item._id;
          }}
        >
          Delete
        </button>
      ))} */}
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

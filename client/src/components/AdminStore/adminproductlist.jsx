import { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS, ADD_CATEGORY } from "../../utils/actions";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_PRODUCTS, QUERY_CATEGORIES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif";
import { Link } from "react-router-dom";
import { CREATE_CATEGORY } from "../../utils/mutations";
import Auth from "../../utils/auth";

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    // console.log(state);
  });

  const [createCategory, { error }] = useMutation(CREATE_CATEGORY, {
    refetchQueries: [QUERY_CATEGORIES, "categories"],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createCategory({
        variables: {
          categoryName: state.createCategory,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    if (name === "categoryName" && value.length <= 280) {
      console.log(value);
      dispatch({ type: ADD_CATEGORY, createCategory: value });
    }
  };

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <textarea
            name="categoryName"
            placeholder="New Category Name"
            value={state.createCategory}
            className="form-input w-100"
            style={{ lineHeight: "1.5", resize: "vertical" }}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Category
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            {error.message}
          </div>
        )}
      </form>
      <h2>Our Products:</h2>
      {state.products.length ? (
        <div className="flex-row">
          <div className="img ">
            <img src="../assets/images/Sonic-Healing.JPG" />
          </div>
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;

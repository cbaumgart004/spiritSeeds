import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Merch from "./pages/Merch";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Success from "./pages/Success";
import OrderHistory from "./pages/OrderHistory";
import Home from "./pages/Home";
import ValuesPage from "./pages/ValuesPage";
import BookService from "./pages/BookService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/orderHistory",
        element: <OrderHistory />,
      },
      {
        path: "/products/:id",
        element: <Detail />,
      },
      {
        path: "/merch",
        element: <Merch />,
      },
      {
        path: "/values",
        element: <ValuesPage />,
      },
      {
        path: "/bookService",
        element: <BookService />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

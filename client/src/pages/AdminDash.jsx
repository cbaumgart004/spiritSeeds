import AdminStore from "../components/AdminStore/adminproductlist";
import CategoryMenu from "../components/CategoryMenu";
import Auth from "../utils/auth";

const Admin = () => {
  if (Auth.isAdmin()) {
    return (
      <div className="container">
        <CategoryMenu />
        <AdminStore />
        {/* <AdminServices /> */}
        {/* <AdminStyling /> */}
      </div>
    );
  } else {
    return (
      <div>
        <h2>You are not authorized to view this page.</h2>
      </div>
    );
  }
};

export default Admin;

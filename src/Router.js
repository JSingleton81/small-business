import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import cookie from "cookie";
import AddBusiness from "./Containers/AddBusiness";
import Details from "./Containers/Details";
import BusinessList from "./Containers/BusinessList";
import Login from "./Containers/Login";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

// const ProtectedRoute = ({component: Component}) => {
//   return (
//       <Route
//        render={() => checkAuth()
//           ? <Component />
//           : <Navigate to="/login"/>}
//       />
//   );
// };
const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;

  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<BusinessList />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/addBusiness"
        element={<ProtectedRoute component={AddBusiness} />}
      />
      <Route path="/business/:id" element={<Details />} />
    </Routes>
  );
};

export default Router;

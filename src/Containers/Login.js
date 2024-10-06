import { login } from "../redux/action";
import Login from "../components/Login";

import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return{
    login: (user) => dispatch(login(user)),
  };
};

export default connect(null, mapDispatchToProps)(Login)
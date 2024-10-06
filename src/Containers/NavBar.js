import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import { loggedInAs } from "../redux/action";


const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => {
  return {
    loggedInAs: (user) => dispatch(loggedInAs(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
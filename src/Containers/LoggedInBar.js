import { connect } from "react-redux";
import LoggedInBar from "../components/LoggedInBar";
import { loggedInAs } from "../redux/action";


const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => {
  return {
    loggedInAs: (user) => dispatch(loggedInAs(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInBar)
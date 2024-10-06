import { connect } from "react-redux";
import Details from "../components/Details";
import { deleteListing , addBusiness} from "../redux/action";


const mapStateToProps = (state) => {
  return {
    user: state.user,
    businesses: state.businesses,
  };
};

const mapDispatchToProps = (dispatch) => {
  // Add your dispatch actions here
  return {
    addBusiness: (business) => dispatch(addBusiness(business)),
    deleteListing: (id) => dispatch(deleteListing(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);

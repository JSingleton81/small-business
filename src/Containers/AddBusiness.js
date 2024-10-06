import { addBusiness } from "../redux/action";
import AddBusiness from "../components/AddBusiness";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return{
    addBusiness: (business) => dispatch(addBusiness(business)),
  };
};

export default connect(null, mapDispatchToProps)(AddBusiness)
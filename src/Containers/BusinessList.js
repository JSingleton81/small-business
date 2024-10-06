import { connect } from 'react-redux'
import BusinessList from "../components/BusinessList";



const mapStateToProps = (state) => ({
  user: state.user,
  businesses: state.businesses // Adjust this according to your state structure
});



export default connect(mapStateToProps )(BusinessList);


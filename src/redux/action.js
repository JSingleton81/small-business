
export const addBusiness = (business) => {
  return {
    type: "ADD_BUSINESS",
    payload: business,
  };
};

export const removeBusiness = (index) => {
  return {
    type: "REMOVE_BUSINESS",
    payload: index,
  };
};

export const deleteBusiness = (index) => {
  return {
    type: "DELETE_BUSINESS",
    payload: index,
  };
};

export const clearUser = (index) => ({
  type: "CLEAR_USER",
  payload: index,
});

export const addListing = (listing) => ({
  type: "ADD_LISTING",
  payload: listing,
});

export const deleteListing = (id) => ({
  type: "DELETE_LISTING",
  payload: id,
});

export const login = (user) => ({
  type: "LOGIN",
  payload: user,
});

export const logout = () => ({
  type: "LOGOUT",
});

export const loggedInAs = (user) => ({
  type: "LOGGED_IN_AS",
  payload: user,
});

export const fetchCoordinates = (address, businessId) => {
  return async (dispatch) => {
    try {
      const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`
      );
      const data = await response.json();
      dispatch({
        type: "FETCH_COORDINATES_SUCCESS",
        payload: { id: businessId, coordinates: data.results[0].geometry.location },
      });
    } catch (error) {
      dispatch({
        type: "FETCH_COORDINATES_FAILURE",
        payload: error,
      });
    }
  };
};



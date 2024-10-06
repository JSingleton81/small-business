import React, { useEffect } from "react";
import { useSelector } from "react-redux";


const LoggedInBar = (props) => {
  // const user = useSelector((state) => state.auth.user);

  return(
    props.user.username && (
      <div style={{ backgroundColor: "#f0f0f0", padding: "10px", textAlign: "center"}} >
        Logged in as: {props.user.username}
      </div>
    )
  );
}; 


export default LoggedInBar;


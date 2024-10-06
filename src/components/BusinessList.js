// import React, { useEffect } from 'react';
// import { Table,
//   TableHead,
//   TableCell,
//   TableContainer,
//   TableRow,
//   Paper,
//   IconButton,
//   TableBody,
// } from '@mui/material';
// import DeleteIcon from "@mui/icons-material/Delete";
// import { Link } from 'react-router-dom';
// // import SimpleMap from './Maps';

import React from "react";
import { Card, CardContent, CardActions, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const BusinessList = (props) => {
  return (
    <div className="card-container">
      {props.businesses.map((business, id) => (
        <Card key={id} className="card">
          <CardContent className="text-gray">
            <span>{business.name.toUpperCase()}</span>
            <ul>
              <li>Business Description: {business["description"]}</li>
              <li>Business Address: {business["address"]}</li>
              <li>Business Hours: {business["hours"]}</li>
            </ul>
          </CardContent>
          <Divider />
          <CardActions style={{ color: "mediumblue" }}>
            <Link to={`/business/${business.id}`}>See More Details</Link>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default BusinessList;

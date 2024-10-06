import React from "react";
import { useParams } from "react-router";
// import Maps from "./Maps";
import AddBusiness from "../Containers/AddBusiness";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  TableHead,
  // Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import Map from "./Maps";


const Details = (props) => {
  
  const { id } = useParams();
  const business = props.businesses.find(b => b.id === Number(id));

  if (!business) {
    return <div>Business not found</div>;
  }
  return (
<div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
  <h1>{business.name}</h1>
  <p>{business.description}</p>
  <p>{business.address}</p>
  <p>{business.hours}</p>
  <Map business={business} />
</div>


    // <Container maxWidth="lg" className="detail-container">
    //   <Paper className="business-paper">
    //     <h4>Welcome, {props.user.username}</h4>
    //     <div>
    //       <AddBusiness />
    //       <SimpleMap />
    //     </div>
    //     <Table>
    //       <TableHead>
    //         <TableRow>
    //           <TableCell>Business Name</TableCell>
    //           <TableCell>Business Description</TableCell>
    //           <TableCell>Business Address</TableCell>
    //           <TableCell>Business Hours</TableCell>
    //           <TableCell>Delete</TableCell>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {props.businesses.map((business, id) => (
    //           <TableRow key={business.id}>
    //             <TableCell component={Link} to={`/business/${business.id}`}>
    //               {business.id}
    //             </TableCell>
    //             <TableCell>{business["name"]}</TableCell>
    //             <TableCell>{business["description"]}</TableCell>
    //             <TableCell>{business["address"]}</TableCell>
    //             <TableCell>{business["hours"]}</TableCell>

    //             <TableCell>
    //               <DeleteIcon
    //                 onClick={() => props.deleteListing(id)}
    //                 className="icon text-red"
    //               />
    //             </TableCell>
    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </Paper>
    // </Container>
  );
};

export default Details;

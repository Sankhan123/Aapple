import React from 'react';
import { useLocation, Link } from "react-router-dom";

function TransactionDetails() {


  let Location = useLocation();
  const data = Location.state;
  return <div>hello </div>;
}

export default TransactionDetails;

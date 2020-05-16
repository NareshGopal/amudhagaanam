import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function Table(props) {
  return (
    <table className="table table-striped">
      <TableHeader />
      <TableBody data={props.data} />
    </table>
  );
}

export default Table;

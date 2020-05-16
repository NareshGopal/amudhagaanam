import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function Table(props) {
  return (
    <table className="table table-striped">
      <TableHeader removeSongFlag={props.removeSongFlag} />
      <TableBody data={props.data} removeSongFlag={props.removeSongFlag} />
    </table>
  );
}

export default Table;

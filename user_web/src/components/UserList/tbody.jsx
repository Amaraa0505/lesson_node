import React from "react";
import TRow from "./trow";

const TBody = ({ users, refresh, setRefresh }) => {
  return (
    <tbody>
      {users.map((user) => (
        <TRow user={user} refresh={refresh} setRefresh={setRefresh} />
      ))}
    </tbody>
  );
};

export default TBody;

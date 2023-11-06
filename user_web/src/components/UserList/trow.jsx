import React from "react";

const TRow = ({ user, setRefresh, refresh }) => {
  const getDepartment = (department) => {
    switch (department) {
      case "human resource": {
        return (
          <div className={`badge badge-primary badge-outline`}>
            {user.department}
          </div>
        );
      }
      case "technology": {
        return (
          <div className={`badge badge-secondary badge-outline`}>
            {user.department}
          </div>
        );
      }
      default: {
        return (
          <div className={`badge badge-accent badge-outline`}>
            {user.department}
          </div>
        );
      }
    }
  };

  const deleteChange = async (userId)=> { // 2
    // const index = users.findIndex((u)=> u.id === userId); // [ {name :naraa, id:1}, {name: saraa, id:2} ] => 1
    // if (index !== -1){
    //   const updateUsers = [...users]; // [ {name :naraa, id:1}, {name: saraa, id:2}  ]
    //   updatedUsers.splice(index, 1); //  1, 1 => [ {name :naraa, id:1} ]  ]
    // }
    try{
      const {message} = await fetch(`http://localhost:8008/api/users/${userId}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }
      )
    }catch(error){
      console.log(error)
    }finally{
      setRefresh(!refresh);
    }
  };

  return (
    <tr className="hover:bg-slate-100">
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={user.avatarUrl} alt={user.firstName} />
            </div>
          </div>
        </div>
      </td>
      <td>
        <span className="font-bold">{user.firstName}</span>
      </td>
      <td>
        <span className="font-bold">{user.lastName}</span>
      </td>
      <td>
        <span className="font-bold">{user.email}</span>
      </td>
      <td>
        <button className="btn btn-ghost btn-xs">{user.birthDate}</button>
      </td>
      <td>{getDepartment(user.department)}</td>
      <td>
        <button className=" btn btn-warning  mx-2">засах</button>
        <button className="  btn btn-error " onClick={deleteChange.bind(this, user.id)}>устгах</button>
      </td>
    </tr>
  );
};

export default TRow;

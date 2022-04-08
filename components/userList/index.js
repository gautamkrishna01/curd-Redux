/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import get user Action from actions
import { handleGetUser } from "../../redux/actions/index";
import { Link } from "react-router-dom";
export function UserList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetUser());
  }, []);
  //get users data from reducers(store)
  const _GET_USER = useSelector((e) => e?.user);

  console.log("userDetail", _GET_USER);
  return (
    <div className="container">
      <div className="row">
        <h1>Redux CRUD User app</h1>
      </div>
      <div className="row">
        <div className="two columns">
          <button
            className="button-primary"
            onClick={() => {
              dispatch(handleGetUser());
            }}
          >
            Load users
          </button>
        </div>
        <div className="two columns">
          <Link to="/add-user">
            <button className="button-primary">Add user</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <table className="u-full-width">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {_GET_USER?.getUser?.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>
                  <button
                    onClick={() => {
                      // dispatch(handleDeleteUser(item?.id));
                      dispatch({ type: "DELETE_USER", payload: item.id });
                    }}
                  >
                    Delete
                  </button>
                  <Link to={`/edit-user/`}>
                    <button
                      onClick={() => {
                        dispatch({ type: "USER_ID", payload: item?.id });
                      }}
                    >
                      Edit
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

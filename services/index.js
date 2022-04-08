import axios from "axios";

//get user api call
export const getUser = () =>
  new Promise((resolve, reject) =>
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject({ message: `Something Went Wrong` });
      })
  );

//add user api call
export const addUser = (data) =>
  new Promise((resolve, reject) =>
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject({ message: `Something Went Wrong` });
      })
  );

// update user api call
export const updateUser = (id) =>
  new Promise((resolve, reject) =>
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id.id}`, id)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject({ message: `Something Went Wrong` });
      })
  );

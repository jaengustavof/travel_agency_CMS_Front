

import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getUsers = async () => {

  try {
    axios.get(`${process.env.REACT_APP_API_URL}/users`)
    .then(function (response) {
    // handle success

    return response;
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })

  } catch (error) {
    console.info("> error: ", error.message);
    return {
      success: false,
      data: [],
    };
  }
};



import React from 'react';
import axios from "axios";
import qs from "qs";

const homeAuth = () => {
  const data = qs.stringify({
    'client_id': `${process.env.REACT_APP_CLIENT_ID}`,
    'client_secret': `${process.env.REACT_APP_CLIENT_SECRET}`,
    'grant_type': 'client_credentials' 
    });

    const config = {
        method: 'post',
        url: 'https://test.api.amadeus.com/v1/security/oauth2/token',
        headers: { },
        data : data
      };

    axios(config)
    .then(function (response) {
        console.log(response.data)
  
    })
    .catch(function (error) {
    console.log(error);
    });
}

export default homeAuth
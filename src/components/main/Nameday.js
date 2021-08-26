import React, { useState, useEffect } from "react";
import axios from "axios";

export const Nameday = () => {
  const [nameday, setNameday] = useState([]);

  useEffect(() => {
    //working version
    function performSignIn() {
      fetch("https://nameday.abalin.net/today", {
        mode: "cors",
        credentials: "include",
        method: "POST",
        headers: {},
      })
        .then((response) => response.json())
        .then((json) => setNameday(json.data.namedays.hu))
        .catch((error) =>
          console.log("Authorization failed : " + error.message)
        );
    }

    //axios async await post
    async function asyncPerformSignIn() {
      const response = axios({
        method: "post",
        url: "https://nameday.abalin.net/today",
        data: {},
        headers: {
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
          "Access-Control-Allow-Headers":
            "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
        }, // doesn't work atm
      });
      console.log(response);
    }
    performSignIn();
  }, []);

  return <div>Nameday: {nameday}</div>;
};

import React, { useState, useEffect } from "react";

export const Nameday = () => {
  const [nameday, setNameday] = useState([]);

  useEffect(() => {
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
    performSignIn();
  }, []);

  return <div>{nameday}</div>;
};

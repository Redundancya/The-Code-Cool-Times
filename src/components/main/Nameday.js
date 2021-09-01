import React, { useState, useEffect } from "react";

export const Nameday = () => {
  const [nameday, setNameday] = useState("");

  useEffect(() => {
    function performSignIn() {
      fetch("https://nameday.abalin.net/today", {
        method: "POST",
      })
        .then((response) => response.json())
        .then((json) => setNameday(json.data.namedays.hu))
        .catch((error) =>
          console.log("Authorization failed : " + error.message)
        );
    }
    performSignIn();
  }, []);

  if (nameday === "") {
    return <div> </div>;
  }

  return <div className="NameDay">Today's nameday(s): {nameday}</div>;
};

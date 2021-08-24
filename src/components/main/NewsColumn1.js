import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";

export default function NewsColumn1() {
  const [news, setNews] = useContext(NewsContext);

  return <div>Sajt</div>;
}

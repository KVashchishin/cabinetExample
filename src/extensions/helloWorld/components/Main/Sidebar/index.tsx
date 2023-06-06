import * as React from "react";
import { useData } from "../DataProvider";

const Sidebar = () => {
  const data = useData();

  const { initData } = data;

  console.log(initData);

  return <div>Sidebar</div>;
};

export default Sidebar;

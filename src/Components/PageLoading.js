import React from "react";

import "./styles/PageLoading.css";
import Loader from "./Loader";

function PageLoading() {
  return (
    <div className="PageLoading">
      <Loader />
      <div className="text-white bg-primary">Loading...</div>
    </div>
  );
}

export default PageLoading;

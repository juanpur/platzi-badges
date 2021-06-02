import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../images/404_Error_Page_NotFound.svg";

function NotFound() {
  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="Home__col col-12 col-md-4">
            <Link className="btn btn-primary" to="/">
              Go to Page Home
            </Link>
          </div>
          <div className="Home__col d-none d-md-block col-md-8">
            <img
              src={NotFoundImage}
              alt="Page Not Found"
              className="img-fluid p-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

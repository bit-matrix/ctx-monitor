import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_TITLE } from "../../app/ROUTE";

const NotFoundPage = () => {
  const navigate = useNavigate();

  document.title = ROUTE_TITLE.NOT_FOUND;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigate("/");
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [navigate]);

  return (
    <>
      <span>Not Found. Redirecting to home page...</span>
    </>
  );
};

export default NotFoundPage;

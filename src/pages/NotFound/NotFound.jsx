import { useState, useEffect, Fragment } from "react";
// components
import { Box } from "@mui/material";
import { Error } from "../../components/Error/Error";
import { Navigate } from "react-router-dom";
// static
import NOT_FOUND from "../../assets/img/notFound.jpg";
import { PATHS } from "../../consts/paths";

export const NotFound = () => {
  const [isRedirect, setIsRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsRedirect((p) => !p), 0);
  }, []);

  return (
    <Fragment>
      {isRedirect ? (
        <Navigate to={PATHS.home} replace={true} />
      ) : (
        <>
          {/* <Error message={`ERROR: 404. THE PAGE IS NOT FOUND`} />
          <Box sx={{ height: "65vh", textAlign: "center" }}>
            <img
              src={NOT_FOUND}
              alt="notFound.jpg"
              style={{ height: "100%", width: "60%", objectFit: "contain" }}
            />
          </Box> */}
        </>
      )}
    </Fragment>
  );
};

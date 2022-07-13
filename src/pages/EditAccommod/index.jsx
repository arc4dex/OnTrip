/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../components/ErrorBoundary";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import HeaderDesktop from "../../components/headerDesktop";
import FormEditAccommod from "../../components/FormEditAccommod";

import { useParams } from "react-router-dom";

import { Api } from "../../services/api";
import { useState } from "react";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function EditAccommod() {
  const params = useParams();

  const [currentAccommodation, setCurrentAccommodation] = useState(null);

  const userIsLoggedReducer = useSelector(
    ({ userState }) => userState
  );

  const history = useHistory();

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");

    const userId = localStorage.getItem("userId");

    const accommodationId = parseInt(params.idAccommodation);

    async function getData() {
      const data = await Api.get(
        `users/${userId}/accommodation?id=${accommodationId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
        .then((response) => {
          // console.log(response.data);
          return response.data;
        })
        .catch((error) => console.log(error));

      setCurrentAccommodation(data);
    }

    getData();
  }, []);

  return (
    <>
      {userIsLoggedReducer ? <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Header />
      <HeaderDesktop />
      {currentAccommodation ? (
        <FormEditAccommod currentAccommodation={currentAccommodation} />
      ) : (
        <div>Loading...</div>
        // <TODO>Arrumar esse loading</TODO>
      )}

      <Footer />
    </ErrorBoundary> : history.push("/")}
    </>
    
  );
}

export default EditAccommod;

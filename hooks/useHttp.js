import Constants from "expo-constants";
import { useState } from "react";

const { domain } = Constants.expoConfig.extra;

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postRequest = async (endPoint, body, token = null) => {
    setLoading(true);
    setError(null);

    const apiUrl = `${domain}${endPoint}`;

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const config = {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    };
    // console.log(apiUrl, config);
    try {
      const response = await fetch(apiUrl, config);
      //   if (!response.ok) {
      //     throw new Error("Network response was not ok");
      //   }
      const data = await response.json();
      console.log(data);
      setLoading(false);
      console.log("Response:", data); // Add this line to log the response
      return data;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const deleteRequest = async (endPoint, token = null) => {
    setLoading(true);
    setError(null);

    const apiUrl = `${domain}${endPoint}`;
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const config = {
      method: "DELETE",
      headers,
    };

    try {
      const response = await fetch(apiUrl, config);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setLoading(false);
      return data;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return { loading, error, postRequest, deleteRequest };
};

export default useHttp;

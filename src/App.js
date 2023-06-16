import { BrowserRouter } from "react-router-dom";
import SignIn from "./Components/SignIn";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Routing from "./Routes/routing";
import { useEffect, useState } from "react";
import { getData } from "./Redux/fetchdata";
import axios from "axios";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("a");
    fetchCountries();
    console.log("b");
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await axios
        .get("https://restcountries.com/v2/all?fields=name,region,flag")
        .then((res) => {
          console.log(res);
          dispatch(getData(res.data));
        });
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;

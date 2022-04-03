import "./App.css";
import RouteBuilder from "./routes/RouteBuilder";
import { getManagerReqStatus } from "./redux/action-creaters";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUserDetails } from "./redux/slices/login-slice";


function App() {

  const dispatch = useDispatch();
  
  
  useEffect(() => {
    // console.log("In App js");
    dispatch(getManagerReqStatus());
    // authToken = localStorage.getItem("authToken");
    // console.log(authToken);
    // authToken !== null && fetch("https://auditoriaserver.herokuapp.com/user/profile", {
    //   method: "get",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer " + authToken,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((datadetail) => {
    //     if (datadetail.error) {
    //       console.log(datadetail.error);
    //     } else {
    //       console.log(datadetail);
    //       dispatch(setUserDetails());
    //       // setProfessionals(datadetail);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

   

  }, []);

  return (
    <div className="App">
      <RouteBuilder  />
    </div>
  );
}

export default App;

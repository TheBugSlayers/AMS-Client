import "./App.css";
import RouteBuilder from "./routes/RouteBuilder";
import { getManagerReqStatus } from "./redux/action-creaters";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUserDetails } from "./redux/slices/login-slice";


function App() {

  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(getManagerReqStatus());
  }, []);

  return (
    <div className="App">
      <RouteBuilder  />
    </div>
  );
}

export default App;

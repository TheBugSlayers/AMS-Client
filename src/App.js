import "./App.css";
import RouteBuilder from "./routes/RouteBuilder";
import { getManagerReqStatus } from "./redux/action-creaters";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state);
  useEffect(() => {
    dispatch(getManagerReqStatus());
  }, []);
  console.log(storeData);
  return (
    <div className="App">
      <RouteBuilder />
    </div>
  );
}

export default App;

import "./App.css";
import { useContext } from "react";
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { AuthContext } from "./Components/Context";

function App() {
  const { isloggedin } = useContext(AuthContext);
  return (
    <div className="App">
      {/* <Login></Login> */}

      {isloggedin ? (
        <div>
          <Nav />
          <Home />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
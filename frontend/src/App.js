import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Survey from "./components/Survey";
import Community from "./components/Community";
import Tutors from "./components/Tutors";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/survey">
            <Header />
            <Survey />
          </Route>
          <Route path="/community">
            <Header />
            <Community />
          </Route>
          <Route path="/tutors">
            <Header />
            <Tutors />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

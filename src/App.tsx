import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn } from "./screens/SignIn";
import { Register } from "./screens/Register";
import { Home } from "./screens/Home";
import { Customer } from "./screens/Customer";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Customer">
          <Customer />
        </Route>
      </Switch>
      <GlobalStyle />
    </Router>
  );
}

export default App;

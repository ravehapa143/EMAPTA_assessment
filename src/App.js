import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from "./components/Homepage.js"
import Commerce from "./components/Commerce.js"


const App = ({
  store,
  ...props
}) => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/commerce" component={Commerce} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

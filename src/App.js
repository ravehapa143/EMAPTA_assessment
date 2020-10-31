import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from "./components/Homepage.js"


const App = ({
  store,
  ...props
}) => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

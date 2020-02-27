import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import configureStore from "./config/configureStore";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={configureStore()}>
          <Layout />
        </Provider>
      </div>
    );
  }
}

export default App;

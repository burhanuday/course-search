import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { channels } from "../shared/constants";
import PageHeader from "./components/PageHeader/PageHeader";
import Search from "./containers/Search/Search";
const { ipcRenderer } = window.require("electron");

class App extends Component {
  constructor(props) {
    super(props);
    ipcRenderer.send(channels.APP_INFO);
    ipcRenderer.on(channels.APP_INFO, (event, arg) => {
      ipcRenderer.removeAllListeners(channels.APP_INFO);
      const { appName, appVersion } = arg;
    });
  }

  state = {
    source: "https://freecourselab.com/wp-json/wp/v2/posts"
  };

  setSource = value => {
    console.log(value);

    this.setState({
      source: value
    });
  };

  render() {
    return (
      <div className="App">
        <PageHeader setSource={this.setSource} />
        <Search source={this.state.source} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import HomeView from "./Views/HomeView";
import { Provider } from "react-redux";
import store from "./Redux_store/store/store";

import './App.css';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        
        <HomeView></HomeView>

      
      </div>
    </Provider>
  );
}

export default App;

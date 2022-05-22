import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Firstpage from "./pages/firstpage";
import Header from "./components/header";
import Dashboard from "./pages/dashboard";
import Wallet from "./pages/wallet";
import Transaction from "./pages/transaction";
import Tradingview from "./pages/trading";
import Sign from "./pages/sign";
import Sidebar from "./components/sidebar";
import './App.css';
import './assets/css/style.css';

import Game from './components/game';
import Marketplace from './components/marketplace';
import MintedNFT from './components/mintedNFT';
import MyNFT from './components/myNFT';
import BuyLand from './components/buyland';


import { useBlockchainContext } from "./context";

function App() {
  const [state, { setMetaState }] = useBlockchainContext();
  const [sidebar, setSidebar] = useState('none');

  useEffect(() => {
    if (state.metastate) {
      setSidebar('block');
    } else { 
      setSidebar('none');
    }
  }, [state.metastate])

  return (
    <BrowserRouter>
      <div style={{ display: sidebar }}>
        <Sidebar />
      </div>
      <div>
        <Header />
        <Switch>
          <Route path="/signin" component={Sign}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/trading" component={Tradingview}></Route>
          <Route path="/wallet" component={Wallet}></Route>
          <Route path="/transaction" component={Transaction}></Route>

          <Route path="/buyland" component={BuyLand}></Route>
          <Route path="/game" component={Game}></Route>
          <Route path="/mintedNFT" component={MintedNFT}></Route>
          <Route path="/marketplace" component={Marketplace}></Route>
          <Route path="/myNFT" component={MyNFT}></Route>

          <Route extra path="/" component={Firstpage}></Route>
        </Switch>
      </div>
    </BrowserRouter >
  );
}

export default App;

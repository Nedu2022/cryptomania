
import React from 'react';
// In latest version of React, Switch is changed to Routes
import { Switch, Route, Link } from 'react-router-dom';
// import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';
import './App.css';


const App = () => {
  return (
    <div className="app">
        <div className="navbar">
            <Navbar />
        </div>
        <div className="main">
            <Layout>
                <div className="routes">
                    <Switch>
                        <Route exact path="/">
                            <Homepage />
                        </Route>
                        <Route exact path="/cryptocurrencies">
                            <Cryptocurrencies />
                        </Route>
                        <Route exact path="/coin/:uuid">
                            <CryptoDetails />
                        </Route>
                        <Route exact path="/news">
                            <News />
                        </Route>
                    </Switch>
                </div>
            </Layout>
        <div className="footer">
                <Typography.Title level={5} style={{ color: "white", textAlign: "center" }}>
                Cryptomania © 2023 all rights reserved
                </Typography.Title>
            </div> 
        </div>
    </div>
  );
}

export default App;

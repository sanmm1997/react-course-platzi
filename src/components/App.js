import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "./layout/Layout";
import Badges from "./../pages/Badges";
import NotFound from "../pages/NotFound";
import BadgesNew from '../pages/BadgesNew';
import BadgesEdit from "../pages/BadgesEdit";
import BadgesDetailsContainer from "../pages/BadgesDetailsContainer";


const App = () => {

    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/badges" component={Badges}/>
                    <Route exact path="/badges/new" component={BadgesNew}/>
                    <Route exact path="/badges/:id" component={BadgesDetailsContainer}/>
                    <Route exact path="/badges/:id/edit" component={BadgesEdit}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )

};


export default App;
import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";
import Explore from "../Routes/Explore";
import Search from "../Routes/Search/SearchContainer";
import Profile from "../Routes/Profile";

const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={Feed}/>
        <Route path="/search" component={Search} />
        <Route path="/explore" component={Explore} />
        <Route path="/:username" component={Profile} />
    </Switch>
);

const LoggedOutRoutes = () => (
    <Switch>
        <Route exact path="/" component={Auth}/>
    </Switch>
);

const AppRouter = ({ isLoggedIn }) => (
    isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/>
);

AppRouter.prototypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
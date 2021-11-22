import { Switch } from "react-router-dom";
import Route from './Route';

import SingIn from '../pages/SignIn';
import SingUp from '../pages/SignUp';
import Dashboard from "../pages/Dashboard";



export default function Routes(){
    return(
        <Switch>
                <Route exact path="/" component={SingIn}/>
                <Route exact path="/register" component={SingUp} />
                <Route exact path="/dashboard" component={Dashboard} isPrivate/>
        </Switch>
    )
}
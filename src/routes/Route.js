import {Route, Redirect} from 'react-router-dom';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}){
    const loading = false;
    const signed = false;

    if(loading){
        return(
            <div></div>
        )
    }

    // se a rota é privada redireciona para pg de login
    if(!signed && isPrivate){
        return <Redirect to="/" />
    }

    //se ele tá logado não é privava 
    if(signed && !isPrivate){
        return <Redirect to="/dashboard" />
    }


    return(
        <Route
            {...rest}
            render={props => (
                <Component {...props}/>
            )}
        
        
        />
    )
}
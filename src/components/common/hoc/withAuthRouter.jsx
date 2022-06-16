import React from 'react'
import {useMatch} from "react-router-dom";

export const withRouter = (Component) => {
    let RouterComponent = (props) => {
        const match = useMatch('profile/:id/')
        return <Component {...props} match={match} />
    }
    return RouterComponent
}
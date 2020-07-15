import React from 'react'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

export const WithAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            return (
                this.props.isAuth ?
                    <Component {...this.props}/> :
                    <Redirect to={'/login'}/>
            )
        }
    }

    const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
    })

return connect(mapStateToProps, null)(RedirectComponent);
}


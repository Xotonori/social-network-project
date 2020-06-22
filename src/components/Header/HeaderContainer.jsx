import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthUserData, isToggleAuth} from "../../redux/reducers/authReducer";
import {ROOT_URL} from "../../redux/reduxStore";
import axios from "axios/index";


class HeaderContainer extends React.Component {

    componentDidMount() {

        axios.get(`${ROOT_URL}/auth/me`, {
            withCredentials: true
        }).then(res => {
            if (res.data.resultCode === 0) {
                let {id, email, login} = res.data.data;
                this.props.setAuthUserData(id, email, login);
                this.props.isToggleAuth(true);
            }
        });

    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }

}

let mapStateToProps = (state) => ({
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {setAuthUserData, isToggleAuth})(HeaderContainer);
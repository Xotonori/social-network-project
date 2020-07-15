import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthUserData} from "../../redux/reducers/authReducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setAuthUserData();
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
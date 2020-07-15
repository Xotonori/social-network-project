import React, {Component} from 'react'
import s from './ProfileStatus.module.scss'

class ProfileStatus extends Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivatedEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={s.ProfileStatus}>


                {this.state.editMode ?
                    <div>
                        <input
                            value={this.state.status}
                            onChange={this.onStatusChange}
                            onBlur={this.deactivatedEditMode}
                            autoFocus={true}
                        />
                    </div>
                    :
                    <div>
                        <span
                            onDoubleClick={this.activateEditMode}>
                            {this.state.status || '-------'}
                        </span>
                    </div>
                }


            </div>

        );
    }
}

export default ProfileStatus;
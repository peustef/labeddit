import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './styled';
import { useHistory } from 'react-router';
import { goToFeed, goToLogin } from '../../routes/coordinator';


const Header = ({rightButton, setRightButton}) => {
    const history = useHistory()
    const token = localStorage.getItem("token")

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if(token) {
            logout()
            setRightButton("Login")
            goToLogin(history)
        } else {
            goToLogin(history)
        }
    }

    return (
        <AppBar color="transparent" position="static">
            <StyledToolbar>
                <Button color="primary" onClick={() => goToFeed(history)}>LabEddit</Button>
                <Button onClick={rightButtonAction} >{rightButton}</Button>
            </StyledToolbar>
        </AppBar>
    )
}

export default Header
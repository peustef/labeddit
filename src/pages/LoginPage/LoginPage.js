import React from "react";
import { ScreenContainer } from "../../constants/styled";
import { LoginForm } from "./LoginForm";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";


const LoginPage = ({setRightButton}) => {
    useUnprotectedPage()

    return (
        <ScreenContainer>
            <LoginForm setRightButton={setRightButton} />
        </ScreenContainer>
    )
}

export default LoginPage;

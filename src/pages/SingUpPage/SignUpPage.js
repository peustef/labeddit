import React from "react";
import SignUpForm from "./SignUpForm";
import { ScreenContainer } from "../../constants/styled";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

const SignUpPage = ({setRightButton}) => {

    useUnprotectedPage()

    return (
        <ScreenContainer>
           <SignUpForm setRightButton={setRightButton} />
        </ScreenContainer>
    )
}

export default SignUpPage;

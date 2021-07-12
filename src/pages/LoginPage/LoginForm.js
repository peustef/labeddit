import React from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { DialogTitle } from '@material-ui/core';
import { goToSignUp } from "../../routes/coordinator";
import { useHistory } from "react-router";
import { SignUpButtonContainer } from "./styled"
import { InputsContainer } from "../../constants/styled";
import { StyledButton } from "./styled";
import { useForm } from "../../hooks/useForm";
import { login } from "../../services/user";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";


export const LoginForm = ({setRightButton}) => {
    const { form, onChange, cleanFields } = useForm({ email: "", password: "" })
    const history = useHistory()

    useUnprotectedPage()

    const onSubmitForm = (event) => {
        event.preventDefault()

        login(form, cleanFields, history, setRightButton)

    }


    return (
            <InputsContainer variant={"elevation"}>
                <DialogTitle>Entrar</DialogTitle>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"Email"}
                        type={"email"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        type={"password"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        inputProps={{ pattern: "^.{8,}", title: "Sua senha deve ter no mínimo 8 caracteres" }}
                    />
                    <StyledButton
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                    >
                        Login
                    </StyledButton>
                </form>


                <SignUpButtonContainer>
                    <Button
                        type={"button"}
                        fullWidth
                        variant={"text"}
                        color={"secondary"}
                        onClick={() => goToSignUp(history)}
                    >
                        Não possui conta? Cadastre-se :)
                    </Button>
                </SignUpButtonContainer>
            </InputsContainer>
    )
}

import React from "react";
import { TextField } from "@material-ui/core";
import { DialogTitle } from '@material-ui/core';
import { InputsContainer } from "../../constants/styled";
import { StyledButton } from "./styled";
import { useForm } from "../../hooks/useForm";
import { signUp } from "../../services/user";
import { useHistory } from "react-router-dom";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

const SignUpForm = ({setRightButton}) => {
    const { form, onChange, cleanFields } = useForm({ username: "", email: "", password: "" })
    const history = useHistory()

    useUnprotectedPage()

    const onSubmitForm = (event) => {
        event.preventDefault()

        signUp(form, cleanFields, history, setRightButton)
    }

    return (
            <InputsContainer variant={"elevation"}>
                <DialogTitle>Cadastre-se</DialogTitle>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"username"}
                        value={form.username}
                        onChange={onChange}
                        label={"Nome"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        inputProps={{ pattern: "^.{3,}", title: "Seu nome deve ter no mínimo 3 caracteres" }}

                    />
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
                        Criar cadastro
                    </StyledButton>
                </form>
            </InputsContainer>
    )
}

export default SignUpForm;

import React from 'react';
import { TextField } from "@material-ui/core";
import { CreateCommentsCard, StyledButton } from './styled';
import { useForm } from '../../hooks/useForm';
import { createComment } from '../../services/post';



export default function CreateComment({ setComments, id }) {
    const { form, onChange, cleanFields } = useForm({ body: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()

        createComment(form, cleanFields, id, setComments)

    }


    return (
        <>

            <CreateCommentsCard>
                <form onSubmit={onSubmitForm}>

                    <TextField
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        label={"Comentário"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                    />
                    <StyledButton
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                    >
                        Comentar
                    </StyledButton>
                </form>
            </CreateCommentsCard>


        </>
    );
}
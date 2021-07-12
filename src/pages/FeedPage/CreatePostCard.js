import React from 'react';
import { TextField } from "@material-ui/core";
import { CreatePostsCard, StyledButton } from './styled';
import { useForm } from '../../hooks/useForm';
import { createPost } from '../../services/post';



export default function CreatePostCard({ setPosts }) {
    const { form, onChange, cleanFields } = useForm({ title: "", body: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()

        createPost(form, cleanFields, setPosts)

    }


    return (
        <>

            <CreatePostsCard>
                <form onSubmit={onSubmitForm}>

                    <TextField
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        label={"Título"}

                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                    />
                    <TextField
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        label={"Texto"}
                        multiline
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        rows={4}
                        inputProps={{ pattern: "^.{8,}", title: "Sua senha deve ter no mínimo 8 caracteres" }}
                    />
                    <StyledButton
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                    >
                        Criar post
                    </StyledButton>
                </form>
            </CreatePostsCard>


        </>
    );
}
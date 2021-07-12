import styled from "styled-components";
import { Card } from "@material-ui/core";
import { Button } from "@material-ui/core"

export const StyledButton = styled(Button)`
    margin-bottom: 16px;
    margin-top: 16px;

`

export const PostsCard = styled(Card)`
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    word-break: break-word;
    width:80vw;
    padding: 1vw;
    max-width:500px;
    margin-top: 1vh;
    margin-bottom: 0vh;
`

export const CreatePostsCard = styled(Card)`
    display: flex;
    flex-direction: column;
    width:80vw;
    padding: 1vw;
    max-width:500px;
    margin-top:4vh;
    margin-bottom:2vh
`
import styled from "styled-components";
import { Card } from "@material-ui/core";
import { Button } from "@material-ui/core"

export const StyledButton = styled(Button)`
    margin-bottom: 16px;
    margin-top: 16px;

`

export const PostDetailsCard = styled(Card)`
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

export const LoadingCommentsCard = styled(Card)`
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    word-break: break-word;
    width:80vw;
    padding: 1vw;
    max-width:450px;
    margin-top: 1vh;
    margin-bottom: 0vh;
    box-sizing: border-box;
`

export const CommentsCard = styled(Card)`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
    width:70vw;
    padding: 0;
    max-width:450px;
    margin-top: 1vh;
    margin-bottom: 0vh;

    @media(max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items:flex-start;
    }
    
`



export const CreateCommentsCard = styled(Card)`
    display: flex;
    flex-direction: column;
    width:80vw;
    box-sizing: border-box;

    padding-top: 0;
    padding-bottom: 0;
    padding-left:1vh;
    padding-right:1vh;
    max-width:450px;
    margin-top:2vh;
    margin-bottom:3vh
`
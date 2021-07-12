import styled from "styled-components";
import { Card } from "@material-ui/core";

export const InputsContainer = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items:center;
    width:80vw;
    margin-top: 16vh;
    padding: 3vw;
    max-width:450px;
    box-sizing: border-box;

`

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width:100%;
    min-height: 100vh;
    box-sizing: border-box;
    background-color: #DAE0E6;
`
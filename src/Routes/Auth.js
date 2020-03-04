import React, {useState} from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Box = styled.div`
    ${props => props.theme.whiteBox}
`;

export default ()=> {
    const [action, setAction] = useState("logIn");

    return action ==="logIn" ? "Log in" : "Sign up";
};
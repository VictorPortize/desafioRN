import styled from "styled-components/native";

export const Modal = styled.Modal.attrs({
    transparent: true,
})`
    flex:1;
`;

export const Container = styled.View`
    flex:1;
    background-color: #00000090;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    padding: 20px;
    border-radius: 40px;
    background-color: white;
    align-items: center;
    justify-content: center;
`;

export const Loading = styled.ActivityIndicator.attrs({
    size: 'large',
    color: '#44cb8e'
})``;
import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    background-color: #44cb8e;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 30px;
    color: white;
`;

export const Subtitle = styled.Text`
    text-align:center;
    font-size: 16px;
    color: white;
    margin-top: 10px;
    font-weight:bold;
`;

export const ListQuestion = styled.FlatList`
    width: 100%;
    margin-top: 20px;
    border-radius: 10px;
    flex-grow: 0;
    max-height: 60%;
`;

export const Divisor = styled.View`
    width: 90%;
    height: 1px;
    background-color: #c5c5c5;
    align-self: center;
`;

export const Button = styled.TouchableOpacity`
    width: 50%;
    padding: 15px;
    background-color: #41fb5e;
    margin-top: 20px;
    border-radius: 5px;
    align-items: center;
`;

export const TextButton = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: white;
`;
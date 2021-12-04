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
    background-color: white;
    flex-grow: 0;
    max-height: 50%;
`;

export const QuestionContainer = styled.TouchableOpacity`
    padding: 30px;
    align-items : center;
`;

export const QuestionText = styled.Text`
    color: #4e4e4e;
    font-size: 20px;
    font-weight: bold;  
`;

export const Divisor = styled.View`
    width: 90%;
    height: 1px;
    background-color: #c5c5c5;
    align-self: center;
`;
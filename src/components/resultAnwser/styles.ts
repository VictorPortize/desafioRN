import styled, { css } from 'styled-components/native';
import { QuestionContainerProps, QuestionTextProps } from './models'

export const ContainerAwsers = styled.View`
    width: 100%;
    align-self: center;
    margin-top: 20px;
`;

export const ContainerRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
`;

export const QuestionContainer = styled.View<QuestionContainerProps>`
    padding: 20px;
    background-color: white;
    align-items: center;
    border-radius: 10px;
    ${props => {
        if(Object.keys(props).includes('correct')){
            return css`
                background-color: ${props.correct ? 'green' : 'red'};
            `
        }
    }}
`;

export const QuestionText = styled.Text<QuestionTextProps>`
    color: #4e4e4e;
    font-size: 20px;
    font-weight: bold;
    ${props => {
        if(props.response){
            return css`
                color: white;
            `
        }
    }}
`;

export const Subtitle = styled.Text`
    text-align:center;
    font-size: 18px;
    color: white;
    margin-top: 10px;
    font-weight:bold;
`;

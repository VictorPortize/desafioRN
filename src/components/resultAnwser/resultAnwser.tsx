import React from 'react';
import * as S from './styles';
import {  Question } from '../../context/question'

type Props = {
    data : Question;
}

export const ResultAnwser: React.FC<Props> = ({data}) => {
    return (
        <S.ContainerAwsers>
            <S.Subtitle>{data.question}</S.Subtitle>
            <S.Subtitle>Your answer was: </S.Subtitle>
                <S.QuestionContainer correct={data.correctAnwser} >
                    <S.QuestionText response >{data.response}</S.QuestionText>
                </S.QuestionContainer>
            <S.Subtitle>The correct answer was: </S.Subtitle>
                <S.QuestionContainer>
                    <S.QuestionText>{data.correct_answer}</S.QuestionText>
                </S.QuestionContainer>
        </S.ContainerAwsers>
    )
}
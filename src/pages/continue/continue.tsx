import React from 'react';
import * as S from './styles';
import { useContinue } from './useContinue'

export const Continue = () => {
    const use = useContinue()
    return (
        <S.Container>
            <S.Title>All right!</S.Title>
            <S.Subtitle>The number of selected questions was {use.number} {use.number > 1 ? "questions" : "question" }</S.Subtitle>
            <S.Subtitle>To start the questionnaire press the "Start" button, to return press the "Cancel" button</S.Subtitle>
            <S.ContainerButtons>
                <S.Button cancel onPress={use.onCancel} >
                    <S.TextButton>Cancel</S.TextButton>
                </S.Button>
                <S.Button onPress={use.onStart} >
                    <S.TextButton>Start</S.TextButton>
                </S.Button>
            </S.ContainerButtons>
        </S.Container>
    )
}
import React from 'react';
import * as S from './styles';
import { useResult } from './useResult'
import ResultAnwser from '../../components/resultAnwser';

export const Result = () => {
    const use = useResult()

    return (
        <S.Container>
            <S.Title>Result {use.questions.length} {use.questions.length > 1 ? "questions" : "question" }</S.Title>
            <S.Subtitle>Correct: {use.graph.correct.length} </S.Subtitle>
            <S.Subtitle>Wrong : {use.graph.invalid.length} </S.Subtitle>
            <S.ListQuestion
                showsVerticalScrollIndicator={false}
                data={use.questions}
                keyExtractor={(index, key) => String(key)}
                renderItem={({item}) => (<ResultAnwser data={item} />)}
            />
            <S.Button onPress={use.onPress} >
                <S.TextButton>Save Result</S.TextButton>
            </S.Button>
        </S.Container>
    )
}
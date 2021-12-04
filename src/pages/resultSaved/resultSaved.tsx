import React from 'react';
import * as S from './styles';
import { useResultSaved } from './useResultSaved'
import ResultAnwser from '../../components/resultAnwser';

export const ResultSaved = () => {
    const use = useResultSaved()
    

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
        </S.Container>
    )
}
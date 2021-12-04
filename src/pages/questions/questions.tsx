import React from 'react';
import * as S from './styles';
import { useQuestionsPage } from './useQuestionsPage'

export const Questions = () => {
    const use = useQuestionsPage()

    return (
        <S.Container>
            <S.Title>Question {use.currentIndex.current + 1}/{use.questions.length}</S.Title>
            <S.Subtitle>{use.currentQuestion.question}</S.Subtitle>
            <S.ListQuestion
                data={use.currentQuestion.array_questions}
                ItemSeparatorComponent={() => <S.Divisor />}
                keyExtractor={(index, key) => String(key)}
                renderItem={({item}) => (
                    <S.QuestionContainer onPress={() => use.onPress(item)} >
                        <S.QuestionText>{item}</S.QuestionText>
                    </S.QuestionContainer>
                )}
            />
        </S.Container>
    )
}
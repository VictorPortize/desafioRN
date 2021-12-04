import React from 'react';
import * as S from './styles';
import { useSaved } from './useSaved'

export const Saved = () => {
    const use = useSaved()

    return (
        <S.Container>
            <S.Title>Saved Results</S.Title>
            <S.ListQuestion
                data={use.savedQuestions}
                ItemSeparatorComponent={() => <S.Divisor />}
                keyExtractor={(index, key) => String(key)}
                renderItem={({item}) => {
                    return (
                        <S.QuestionContainer onPress={() => use.onPress(item)} >
                            <S.QuestionText>{use.serializeName(item)}</S.QuestionText>
                        </S.QuestionContainer>
                    )
                }}
            />
        </S.Container>
    )
}
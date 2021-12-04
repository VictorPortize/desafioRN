import React from 'react';
import * as S from './styles';
import { useHome } from './useHome'

import Loading from '../../components/loading'

export const Home = () => {
    const use = useHome()
    return (
        <S.Container>
            {use.loading && <Loading />}
            <S.Title>Welcome!</S.Title>
            <S.Subtitle>This app is intended for those who want to test their knowledge</S.Subtitle>
            <S.Subtitle>To start, enter the number of questions you want to answer!</S.Subtitle>
            <S.Input 
                value={use.number}
                onChangeText={use.handleNumber} 
                placeholder={"Number of questions"}
                placeholderTextColor={'grey'}
            />
            <S.Button onPress={use.requestQuestions} >
                <S.TextButton>Start</S.TextButton>
            </S.Button>
            {
                use.savedQuestions.length > 0 && (
                    <S.Button onPress={use.changePageToSaved} >
                        <S.TextButton>View Saved Questions</S.TextButton>
                    </S.Button>
                )
            }
        </S.Container>
    )
}
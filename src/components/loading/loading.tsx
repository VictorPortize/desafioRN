import React from 'react';
import * as S from './styles';

export const Loading = () => {
    return (
        <S.Modal>
            <S.Container>
                <S.Content>
                    <S.Loading />
                </S.Content>
            </S.Container>
        </S.Modal>
    )
}
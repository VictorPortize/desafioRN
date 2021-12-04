import React from 'react';
import useQuestions from '../../context/question'
import { useNavigation, StackActions } from '@react-navigation/native'

export const useContinue = () => {
    const { goBack, dispatch } = useNavigation()
    const { questions } = useQuestions()

    const number = React.useMemo(() => {
        return questions.length;
    },[])

    const onCancel = React.useCallback(() => {
        goBack()
    },[])

    const onStart = React.useCallback(() => {
        dispatch(StackActions.replace('Questions' as never))
    },[])

    return {
        number,
        onStart,
        onCancel,
    }
}
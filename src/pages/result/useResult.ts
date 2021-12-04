import React from 'react';
import useQuestions from '../../context/question'
import {useNavigation, StackActions} from '@react-navigation/native';

export const useResult = () => {
    const { goBack } = useNavigation()
    const { questions, saveQuestions } = useQuestions()


    const graph = React.useMemo(() => {
        let correct = questions.filter(item => item.correctAnwser);
        let invalid = questions.filter(item => !item.correctAnwser);
        return ({
            correct,
            invalid
        })
    },[questions])
    
    const onPress = React.useCallback((awnser : string) => {
        saveQuestions().then(() => {
            goBack()
        });
    },[])

    

    return {
        onPress,
        questions,
        graph,
    }
}
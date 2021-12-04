import React from 'react';
import useQuestions, {Question} from '../../context/question'
import { useNavigation } from '@react-navigation/native'

export const useSaved = () => {
    const { savedQuestions } = useQuestions()
    const { navigate } = useNavigation()

    const serializeName = React.useCallback((questions: Question[]) => {
        const acertos = questions.filter(item => item.correctAnwser).length
        const erros = questions.filter(item => !item.correctAnwser).length
        return `Nº of questions: ${questions.length} - hits: ${acertos} errors: ${erros}`
    },[])

    const onPress = React.useCallback((question) => {
       navigate('ResultSaved' as never,{question} as never) 
    },[])

    return {
        onPress,
        serializeName,
        savedQuestions,
    }
}
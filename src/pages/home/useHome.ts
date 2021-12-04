import React from 'react';
import * as R from 'react-native'
import useQuestions from '../../context/question'
import {useNavigation} from '@react-navigation/native';

export const useHome = () => {
    const { getQuestions, loading, savedQuestions } = useQuestions()
    const [number, setNumber] = React.useState('');
    const { navigate } = useNavigation()

    const handleNumber = React.useCallback((raw: string) => {
        let text = raw.replace(/\D/,'')
        if(raw !== '0'){
            setNumber(text)
        }
    },[])

    const requestQuestions = React.useCallback(() => {
        if(number.length == 0){
            return R.Alert.alert("Number of questions", "Please fill in the number of questions")
        }
        getQuestions(number).then(() => {
            navigate('Continue' as never)
        });
    },[number])

    const changePageToSaved = React.useCallback(() => {
            navigate('Saved' as never)
    },[number])

    return {
        number,
        loading,
        handleNumber,
        savedQuestions,
        requestQuestions,
        changePageToSaved,
    }
}
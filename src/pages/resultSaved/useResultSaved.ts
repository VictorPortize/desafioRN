import React from 'react';
import { useRoute } from '@react-navigation/native';

export const useResultSaved = () => {
    const { params } = useRoute()
    const [ questions, setQuestions ] = React.useState([])

    React.useEffect(() => {
        setQuestions(params.question)
    },[params])

    const graph = React.useMemo(() => {
        let correct = questions.filter(item => item.correctAnwser);
        let invalid = questions.filter(item => !item.correctAnwser);
        return ({
            correct,
            invalid
        })
    },[questions])
    

    return {
        questions,
        graph,
    }
}
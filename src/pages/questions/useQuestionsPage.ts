import React from 'react';
import useQuestions, {Question} from '../../context/question'
import { useNavigation, StackActions } from '@react-navigation/native'

export const useQuestionsPage = () => {
    const { questions, updateWithAnwser } = useQuestions()
    const [ currentQuestion, setCurrentQuestion ] = React.useState<Question>({} as Question); 
    const currentIndex = React.useRef(0);
    const { dispatch } = useNavigation()

    React.useEffect(() => {
        setCurrentQuestion(questions[currentIndex.current]);
    },[])
    
    const onPress = React.useCallback((awnser : string) => {
        let current = currentQuestion;
        let idx = currentIndex.current;
        let correctAnwser = awnser == current.correct_answer; 
        updateWithAnwser(idx, {correctAnwser, response: awnser})
        nextQuestion()
    },[currentIndex, currentQuestion])

    const nextQuestion = React.useCallback(() => {
        if(currentIndex.current + 1 == questions.length ){
            return dispatch(StackActions.replace('Result' as never))
        }
        currentIndex.current++
        setCurrentQuestion(questions[currentIndex.current]);
    },[questions])

    return {
        onPress,
        questions,
        nextQuestion,
        currentIndex,
        currentQuestion,
    }
}
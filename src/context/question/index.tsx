import React from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
    array_questions: string[];
    correctAnwser : boolean;
    response: string;
}

type QuestionProps = {
    questions: Question[];
    savedQuestions: Question[][];
    getQuestions: (num: string) => Promise<void>;
    saveQuestions: () => Promise<void>;
    loading: boolean;
    updateWithAnwser: (idx: number, data : AwserData) => void;
}

type AwserData = {
    correctAnwser : boolean;
    response: string;
}

const Question = React.createContext({} as QuestionProps);

export const QuestionProvider : React.FC = ({children}) => {
    const [savedQuestions, setSavedQuestions] = React.useState<Question[][]>([])
    const [questions, setQuestions] = React.useState<Question[]>([])
    const [loading, setLoading] = React.useState(false)

    const getSaved = React.useCallback(async () => {
        let saved = await AsyncStorage.getItem('saved');
        if(saved){
            setSavedQuestions(JSON.parse(saved));
        }
    },[])

    React.useEffect(() => {
        getSaved()
    },[])


    const serializeQuestion = React.useCallback((name) => {
        let newName = name.replace(/(&quot;)/g,'"');
        newName = newName.replace(/(&#039;)/g,"'");
        return newName;
    },[]);

    const serializeQuestions = React.useCallback((question : Question) => {
        let array_questions = [...question.incorrect_answers, question.correct_answer]
        array_questions.map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        return {...question, question: serializeQuestion(question.question), array_questions}
    },[])
    
    const getQuestions = React.useCallback((number:string) :Promise<void> => {
        return new Promise((resolve, reject) => {
            setLoading(true)
            axios.get(`https://opentdb.com/api.php?amount=${number}`).then(resp => {
                let data = resp.data;
                console.log(data.results)
                let serializedQuestions = data.results.map((item: Question) => serializeQuestions(item))
                setQuestions(serializedQuestions);
            }).finally(() => {
                setLoading(false);
                resolve()
            })
        })
    },[])

    const updateWithAnwser = React.useCallback((idx: number, data: AwserData )  => {
        let newQuestions = [...questions];
        newQuestions[idx] = {...newQuestions[idx], ...data}
        setQuestions(newQuestions)
    },[questions])

    const saveQuestions = React.useCallback(async () : Promise<void> =>  {
        return new Promise((resolve,reject) => {
            let saved = [...savedQuestions];
            saved.push(questions)
            AsyncStorage.setItem('saved',JSON.stringify(saved));
            setSavedQuestions(saved)
            resolve()
        })
    },[questions, savedQuestions])



    return (
        <Question.Provider value={{
            loading,
            questions,
            getQuestions,
            saveQuestions,
            savedQuestions,
            updateWithAnwser
        }} >
            {children}
        </Question.Provider>
    )
}

export default function useQuestion(){
    return React.useContext(Question);
}
import {shuffleArray} from "./utils"

export type Question = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type:string
}

export type QuestionState = Question & {answers:string[]}

export enum Difficulty { EASY = "easy", MEDIUM = "medium", HARD = "hard" }

export const fetchQuizQuestions = async (amount: number, difficulty:Difficulty) => {
    // const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=9&type=multiple&difficulty=${difficulty}`;
    // const data = await(await (await fetch(endpoint)).json())
    
    const data = await fetch(`https://opentdb.com/api.php?amount=${amount}&type=multiple&category=9&difficulty=${difficulty}`).then(res=>res.json())
    return data.results.map((question: Question) => (
        {
            ...question,
            answers:shuffleArray([...question.incorrect_answers,question.correct_answer])
        }
    ))
}   
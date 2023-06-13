import * as React from 'react'
import { useState, useEffect } from 'react'
import QuestionDetail from './QuestionDetail'
import NewQuestion from './NewQuestion'

const QuestionList = () => {
	const handleClick = () => {
		fetchQuestionsList()
	}
	const [questionsList, setQuestionsList] = useState([])
	const questionsUrl = "http://localhost:3000/api/v1/questions"
	const fetchQuestionsList = async () => {
		await fetch(questionsUrl)
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				setQuestionsList(data)
			})
	}
	useEffect(() => {
		fetchQuestionsList()
	}, [])
	return (
		<div className='row'>
			<div className='col-lg-10 mx-auto'>
				<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
					New Question
				</button>
				<NewQuestion click={handleClick} />
				{questionsList.map((question) =>
					<QuestionDetail question={question} key={question.id} />
				)}
			</div>
		</div>
	)
}

export default QuestionList
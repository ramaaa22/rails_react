import * as React from 'react'
import * as ReactDOM from 'react-dom'

const QuestionList = () => {
	const questionsList = [
		{
			title: "First question",
			tag: "Ruby"
		},
		{
			title: "Second question",
			tag: "Js"
		},
		{
			title: "Third question",
			tag: "Java"
		},
		{
			title: "Fourth question",
			tag: "Ruby"
		},
		{
			title: "Fifth question",
			tag: "Js"
		},
	]

	return (
		<div className='row'>
			<div className='col-lg-10 mx-auto'>
				{questionsList.map((question) =>
					<div className='card rounded-0 mt-3'>
						<div className='card-body'>
							<h3 className='card-title'>{question.title}</h3>
							<p className='lead'>
								<span className='badge bg-primary'>{question.tag}</span>
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default QuestionList
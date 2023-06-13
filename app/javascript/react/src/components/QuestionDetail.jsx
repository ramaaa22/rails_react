import * as React from 'react'
import Button from './Button'

const QuestionDetail = ({ question }) => {
	return (
		<div className='card rounded-0 mt-3' >
			<div className='card-body'>
				<h3 className='card-title'>{question.title}</h3>
				<p className='lead'>
					<span className='badge bg-primary'>{question.tag}</span>
				</p>

				<Button name={"Like"} column={"likes_count"} count={question.likes_count} id={question.id} />

				<Button name={"Deslike"} column={"dislikes_count"} count={question.dislikes_count} id={question.id} />

			</div>
		</div>
	)

}

export default QuestionDetail
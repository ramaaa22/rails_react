import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useState } from 'react'

const QuestionDetail = (question) => {
	const [likeCount, setLikeCount] = useState(0)
	const handleClick = () => {
		setLikeCount(likeCount + 1)
	}
	return (
		<div className='card rounded-0 mt-3' >
			<div className='card-body'>
				<h3 className='card-title'>{question.title}</h3>
				<p className='lead'>
					<span className='badge bg-primary'>{question.tag}</span>
				</p>
				<button className='btn btn-primary mt-1' onClick={handleClick}>Like</button>
				{likeCount > 0 ? <span className='badge bg-primary'>{likeCount}</span> : ''}

			</div>
		</div>
	)

}

export default QuestionDetail
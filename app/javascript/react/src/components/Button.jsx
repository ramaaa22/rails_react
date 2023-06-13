import * as React from 'react'
import { useState } from 'react'

const Button = ({ name, column, count, id }) => {
	const [countState, setCountState] = useState(count)
	const countClick = () => {
		setCountState(countState + 1)
		updateQuestion({ count_for: column })
	}

	const updateQuestion = async (data) => {
		await fetch(`http://localhost:3000/api/v1/questions/${id}/update_counter`, {
			method: "PUT",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
			})
			.catch((error) => {
				console.error(error)
			})
	}

	return (
		<button type="button" className="btn btn-primary position-relative" onClick={countClick}>
			{name}
			{countState > 0 ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
				{countState}
			</span> : ''}
		</button>)
}

export default Button
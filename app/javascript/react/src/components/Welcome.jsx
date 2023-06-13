import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import QuestionList from './QuestionList'
import NewQuestion from './NewQuestion'

const Welcome = () => {

	return (
		<div className='container' >
			<QuestionList />
		</div>
	)

}

const root = ReactDOM.createRoot(document.getElementById('welcome'))
root.render(
	<React.StrictMode>
		<Welcome />
	</React.StrictMode>
)


export default Welcome
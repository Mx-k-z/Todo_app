import React from 'react'

const Today = () => {
	const date = new Date().toDateString()
	return (
		<div className='main__today'>
			<h2>Today is {date}</h2>
			<span>Time to complete all yours task</span>
		</div>
	)
}

export default Today
# React count characters in input

	import React, { useState } from 'react'

	export default () => {
		const [characters, setCharacters] = useState(0)

		return (
			<div>
				<textarea onChange={e => setCharacters(e.target.value.split('').length)} />
				{characters}
			</div>
		)
	}

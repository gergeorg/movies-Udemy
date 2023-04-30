import React from 'react'

const Movie = (props) => {
	const { Title, Year, imdbID, Type, Poster } = props

	return (
		<div id={imdbID} className='card blue-grey darken-1'>
			<div className='card-image waves-effect waves-block waves-light'>
				{Poster === 'N/A' ? (
					<img className='activator' src='https://www.kino-teatr.ru/static/images/no_poster.jpg' alt='Title' />
				) : (
					<img className='activator' src={Poster} alt='Title' />
				)}
			</div>
			<div className='card-content'>
				<span className='card-title activator grey-text text-darken-4'>{Title}</span>
				<p>
					{Year} <span className='right'>{Type}</span>
				</p>
			</div>
		</div>
	)
}

export default Movie

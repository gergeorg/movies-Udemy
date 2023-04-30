import { Component } from 'react'
import Movies from '../components/Movies'

import { Loading } from '../components/Loading/Loading'
import { Search } from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY
const URI = 'https://www.omdbapi.com'

class Main extends Component {
	state = {
		movies: [],
		loading: true,
	}

	componentDidMount() {
		fetch(`${URI}/?apikey=${API_KEY}&s=game`)
			.then((res) => res.json())
			.then((data) => this.setState({ movies: data.Search, loading: false }))
			.catch((err) => {
				console.error(err)
				this.setState({ loading: false })
			})
	}

	searchMovies = (str, type = 'all') => {
		this.setState({ loading: true })
		fetch(`${URI}/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
			.then((res) => res.json())
			.then((data) => this.setState({ movies: data.Search, loading: false }))
			.catch((err) => {
				console.error(err)
				this.setState({ loading: false })
			})
	}

	render() {
		const { movies, loading } = this.state
		return (
			<main className=' container content'>
				<Search searchMovies={this.searchMovies} />
				{loading ? <Loading /> : <Movies movies={movies} />}
			</main>
		)
	}
}

export default Main

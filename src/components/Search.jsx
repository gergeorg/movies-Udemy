import React, { Component } from 'react'

export class Search extends Component {
	state = {
		search: '',
		filter: 'all',
	}

	handleKey = (event) => {
		if (event.key === 'Enter') {
			this.props.searchMovies(this.state.search, this.state.filter)
		}
	}

	handleFilter = (e) => {
		this.setState(
			() => ({ filter: e.target.dataset.type }),
			() => {
				this.props.searchMovies(this.state.search, this.state.filter)
			}
		)
	}

	render() {
		return (
			<div className='row'>
				<div className='input-field'>
					<input
						type='search'
						className='validate'
						placeholder='Search...'
						value={this.state.search}
						onChange={(e) => this.setState({ search: e.target.value })}
						onKeyDown={this.handleKey}
					/>

					<button
						className='btn search-btn'
						onClick={() => this.props.searchMovies(this.state.search, this.state.filter)}
					>
						Search
					</button>
				</div>

				<div className='filter'>
					<label>
						<input
							name='type'
							type='radio'
							data-type='all'
							onChange={this.handleFilter}
							checked={this.state.filter === 'all'}
						/>
						<span>All</span>
					</label>

					<label>
						<input
							name='type'
							type='radio'
							data-type='movie'
							onChange={this.handleFilter}
							checked={this.state.filter === 'movie'}
						/>
						<span>Movies only</span>
					</label>

					<label>
						<input
							name='type'
							type='radio'
							data-type='series'
							onChange={this.handleFilter}
							checked={this.state.filter === 'series'}
						/>
						<span>Series only</span>
					</label>
				</div>
			</div>
		)
	}
}

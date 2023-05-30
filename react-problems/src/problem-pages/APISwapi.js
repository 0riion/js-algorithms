// PROBLEM: API call to https://swapi.dev/api/people and render the results to the page.

import { useEffect, useState } from 'react';

const BASE_API = 'https://swapi.dev/api/people';

export default function APISwapi() {
	const [total, setTotal] = useState(0);
	const [nextPage, setNextPage] = useState('');
	const [PrevPage, setPrevPage] = useState('');
	const [loading, setLoading] = useState(true);
	const [people, setPeople] = useState([]);

	const requestPeople = async (url) => {
		try {
			setLoading(true);
			const response = await fetch(url);
			const { results, next, previous, count } = await response.json();
			setPeople(results);
			setNextPage(next);
			setPrevPage(previous);
			setTotal(count);
		} catch (err) {
			console.log(`API request problem: ${err}`);
		} finally {
			setLoading(false);
		}
	};

	const prev = () => {
		requestPeople(PrevPage);
	};

	const next = () => {
		requestPeople(nextPage);
	};

	useEffect(() => {
		requestPeople(BASE_API);
	}, []);

	if (loading) return <h1>Wait, loading people...</h1>;

	return (
		<div> 
			<h1>People result - {total}</h1>
			{people.map(({ name, created, skin_color }) => (
				<div key={`${name}-${created}`}>
					<h4>
						{name} - ({skin_color}){' '}
					</h4>
				</div>
			))}
			<button disabled={!PrevPage} onClick={prev}>
				Previous
			</button>
			<button disabled={!nextPage} onClick={next}>
				Next
			</button>
		</div>
	);
}

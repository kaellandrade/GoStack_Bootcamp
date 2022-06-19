import './App.css';
import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';

function App() {
	const [techs, setTech] = useState([]);
	const [newTech, setNewTech] = useState('');

	/**
	 * Adiciona uma novo item
	 */
	const handleAdd = useCallback(() => {
		setTech([...techs, newTech]);
		setNewTech('');
	}, [techs, newTech]);

	useEffect(() => {
		const local = localStorage.getItem('tech');
		setTech(JSON.parse(local));
	}, []);
	useEffect(() => {
		const storage = localStorage.getItem('tech');
		if (storage === null) {
			localStorage.setItem('tech', JSON.stringify(techs));
			return;
		}

		const localTechs = JSON.parse(storage);

		if (techs.length > localTechs.length) {
			localStorage.setItem('tech', JSON.stringify(techs));
		}

	}, [techs]);
	const techSize = useMemo(() => techs.length, [techs]);

	return (
		<Fragment>
			<ul>
				{techs.map((value, index) => <li key={index}>{value}</li>)}
			</ul>
			<label>{techSize}</label>
			<br />
			<input type='text' value={newTech} onChange={e => setNewTech(e.target.value)} />
			<button type={'button'} onClick={handleAdd}>Adicionar Novo Elemento</button>
		</Fragment>
	);
}

export default App;

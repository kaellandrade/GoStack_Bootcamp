import './App.css';
import { Fragment, useState } from 'react';

function App() {
	const [techs, setTech] = useState(['NodeJs',
		'Php.8', 'React', 'CSS', 'HTML', 'SQL',
	]);

	const [newTech, setNewTech] = useState('');

	/**
	 * Adiciona uma novo item
	 */
	function handleAdd() {
		setTech([...techs, newTech]);
		setNewTech('');

	}

	return (
		<Fragment>
			<ul>
				{techs.map((value, index) => <li key={index}>{value}</li>)}
			</ul>
			<input type='text' value={newTech} onChange={e => setNewTech(e.target.value)} />
			<button type={'button'} onClick={handleAdd}>Adicionar Novo Elemento</button>
		</Fragment>
	);
}

export default App;

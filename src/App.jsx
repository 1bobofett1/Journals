import { useState } from 'react';
import './App.css';
// import Button from './components/Button/Button';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList.jsx/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';

const INITIAL_DATA = [
	// {
	// 	id: 1,
	// 	title: 'Подготовка к обновлению курсов',
	// 	text:'Горные походы открывают удивительные природные ландшафт',
	// 	date: new Date()
	// },
	// {
	// 	id: 2,
	// 	title: 'Реклама',
	// 	text:'Здесь, могла быть ваша реклама xD',
	// 	date: new Date()
	// }
];

function App() {
  
	const [items, setItems] = useState(INITIAL_DATA);

	const addItem = (item) => {
		
		setItems(prevState => [...prevState, {
			title: item.title,
			text: item.text,
			date: new Date(item.date),
			id: Math.max(...prevState.map(i => i.id)) + 1
		}]);
	};

	return (
		<div className='app'>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList items={items}/>
			</LeftPanel>

			<Body>
				<JournalForm newItem={addItem}/>
			</Body>
		</div>
	);
}

export default App;

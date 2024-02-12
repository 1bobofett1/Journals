import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';

function App() {
  
	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			text:'Горные походы открывают удивительные природные ландшафт',
			date: new Date()
		},
		{
			title: 'Реклама',
			text:'Здесь, могла быть ваша реклама xD',
			date: new Date()
		}
	];

	return (
		<>
			<div>Проект</div>
			<Button />
			<CardButton>
				<JournalItem 
					title={data[0].title}
					text={data[0].text}
					date={data[0].date}
				/>
			</CardButton>
			<CardButton>
				<JournalItem 
					title={data[1].title}
					text={data[1].text}
					date={data[1].date}
				/>
			</CardButton>
            
		</>
	);
}

export default App;
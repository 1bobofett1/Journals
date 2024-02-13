import Button from '../Button/Button';
import './journalForm.css';
// import { useState } from 'react';

function JournalForm({newItem}) {

	
	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		newItem(formProps);
	};

	return (

		<form action="" className='journal-form' onSubmit={addJournalItem}>
			<input type="text" name='title' />
			<input type="date" name='date' />
			<input type="text" name='tag' />
			<textarea name="text" id="" cols="30" rows="10"></textarea>
			<Button text="Сохранить" />
		</form>
		
	);
}

export default JournalForm;
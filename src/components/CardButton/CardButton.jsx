import './cardButton.css';

function CardButton({children}) {

	return (
		<button className="card-button">{children}</button>
	);
}

export default CardButton;
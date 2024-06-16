function Card(props) {
	return (
		<div className="Card">
			<h2>{props.name}</h2>
			<img className="img" src={props.imgLink} alt={props.title} />
			<p className="characteristic">{props.characteristic}</p>
			<p>{props.description}</p>
		</div>
	);
}
export default Card;

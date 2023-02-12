import "./button.scss";

function Button(props) {
	return (
		<div className="button">
			<img src={props.icon} className="button__icon" />
			<p className="button__text">{props.children}</p>
		</div>
	);
}

export default Button;

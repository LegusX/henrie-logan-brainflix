import "./button.scss";

function Button(props) {
	return (
		<div className="button">
			<img src={props.icon} className="button__icon" />
			<h4 className="button__text">{props.children}</h4>
		</div>
	);
}

export default Button;

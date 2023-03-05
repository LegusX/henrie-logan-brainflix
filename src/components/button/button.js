import "./button.scss";

function Button({ icon, children }) {
	return (
		<div className="button">
			<img src={icon} className="button__icon" />
			<p className="button__text">{children}</p>
		</div>
	);
}

export default Button;

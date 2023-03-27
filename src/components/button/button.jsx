import "./button.scss";

function Button({ icon, children, inverted, click }) {
	if (typeof icon === "undefined") icon = false;
	if (typeof inverted === "undefined") inverted = false;
	return (
		<div
			className={`button${inverted ? "--inverted button" : ""}`}
			onClick={click}
		>
			{icon && <img src={icon} className="button__icon" alt="" />}
			<p className="button__text">{children}</p>
		</div>
	);
}

export default Button;

import "./icon.scss";

function icon(props) {
	console.log(props);
	return (
		<div
			className={"user-icon " + props.className}
			style={{
				backgroundImage: `url(${props.src})`,
			}}
		></div>
	);
}

export default icon;

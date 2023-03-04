import "./player.scss";
// class Player extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			video: props.video,
// 		};
// 		this.video = props.video;
// 	}

// 	render() {
// 		return (
// 			<div className="player" key={this.video.id}>
// 				<div className="player__controls">
// 					<video
// 						className="player__video"
// 						src={this.video.url}
// 						poster={this.video.image}
// 					></video>
// 				</div>
// 			</div>
// 		);
// 	}
// }

export default function Player({ video, id }) {
	// const [video] = useState(props.video);

	return (
		<div className="player" key={id}>
			<div className="player__controls">
				<video
					className="player__video"
					src={video.url}
					poster={video.image}
				></video>
			</div>
		</div>
	);
}

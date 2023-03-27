import "./player.scss";

export default function Player({ video, id }) {
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

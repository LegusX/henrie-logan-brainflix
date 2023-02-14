import "./player.scss";

import React from "react";

class Player extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			video: props.video,
		};
		this.video = props.video;
	}

	render() {
		console.log("player");
		return (
			<div className="player" key={this.video.id}>
				<div className="player__controls">
					<video
						className="player__video"
						src={this.video.url}
						poster={this.video.image}
					></video>
				</div>
			</div>
		);
	}
}

export default Player;

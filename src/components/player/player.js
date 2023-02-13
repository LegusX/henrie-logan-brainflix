import "./player.scss";

import React from "react";

class Player extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			video: props.video,
		};
	}
	render() {
		return (
			<div className="player">
				<div className="player__controls">
					<video
						className="player__video"
						src={this.state.video.url}
						poster={this.state.video.image}
					></video>
				</div>
			</div>
		);
	}
}

export default Player;

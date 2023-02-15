import "./videos.scss";

import React from "react";

// class Videos extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		// this.state = {
// 		// 	selected: props.selected,
// 		// };
// 		this.selected = props.selected;
// 		this.videos = props.videos;
// 		this.changeVideo = props.changeVideo;
// 		console.log(this.changeVideo);
// 	}
// 	render() {
// 		//remove currently playing video
// 		const filtered = this.videos.filter((video) => {
// 			if (video !== this.selected) return video;
// 		});

// 		const videoItems = filtered.map((video) => this.VideoItem(video));
// 		//create
// 		return (
// 			<div className="videos">
// 				<p className="videos__header">Next Videos</p>
// 				<div>{videoItems}</div>
// 			</div>
// 		);
// 	}

// 	VideoItem(video) {
// 		return (
// 			<div
// 				className="videos__video"
// 				onClick={() => this.changeVideo(video)}
// 				key={video.id}
// 				data-id={video.id}
// 			>
// 				<div className="videos__thumbnail">
// 					<img src={video.image} />
// 				</div>
// 				<div className="videos__text">
// 					<p className="videos__title">{video.title}</p>
// 					<p className="videos__channel">{video.channel}</p>
// 				</div>
// 			</div>
// 		);
// 	}
// }

export default function Videos({ id, videos, changeVideo }) {
	const filtered = videos.filter((video) => {
		if (video.id !== id) return video;
	});

	const videoItems = filtered.map((video) => VideoItem(video));
	//create
	return (
		<div className="videos">
			<p className="videos__header">Next Videos</p>
			<div>{videoItems}</div>
		</div>
	);
}

function VideoItem(video) {
	return (
		<div
			className="videos__video"
			onClick={() => this.changeVideo(video)}
			key={video.id}
			data-id={video.id}
		>
			<div className="videos__thumbnail">
				<img src={video.image} />
			</div>
			<div className="videos__text">
				<p className="videos__title">{video.title}</p>
				<p className="videos__channel">{video.channel}</p>
			</div>
		</div>
	);
}

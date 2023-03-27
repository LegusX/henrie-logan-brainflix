import "./videos.scss";

import React from "react";
import { Link } from "react-router-dom";

export default function Videos({ videos }) {
	const videoItems = videos.map((video) => VideoItem(video));

	return (
		<div className="videos">
			<p className="videos__header">Next Videos</p>
			<div>{videoItems}</div>
		</div>
	);
}

function VideoItem(video) {
	return (
		<Link to={`/videos/${video.id}`} key={video.id}>
			<div className="videos__video" data-id={video.id}>
				<div className="videos__thumbnail">
					<img src={video.image} alt="" />
				</div>
				<div className="videos__text">
					<p className="videos__title">{video.title}</p>
					<p className="videos__channel">{video.channel}</p>
				</div>
			</div>
		</Link>
	);
}

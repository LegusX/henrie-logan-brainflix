import "./main.scss";

import Player from "../player/player";
import Video from "../../video";

import videosData from "../../data/videos.json";
import detailsData from "../../data/video-details.json";

function Main() {
	const videos = videosData.map((video) => {
		//Go through detailsData manually because there is no guarantee the indexes will line up with videosData
		for (let i = 0; i < detailsData.length; i++) {
			let detail = detailsData[i];
			if (detail.id === video.id) return new Video(video, detail);
		}
	});

	let selected = videos[0];
	return (
		<div className="main">
			<Player video={selected} />
		</div>
	);
}

export default Main;

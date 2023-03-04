import "./videopage.scss";

import { useEffect, useState } from "react";
import { getDetails } from "../../api";
import { useParams } from "react-router-dom";
import { getVideos } from "../../api";

import Player from "../../components/player/player";
import Details from "../../components/details/details";
import Videos from "../../components/videos/videos";

export default function VideoPage() {
	const { id } = useParams();
	const [video, setVideo] = useState(0);
	const [details, setDetails] = useState(0);
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		getVideos().then((data) => {
			//if there isn't an id paramater, then this is for the home page and we should use the first video in the array
			//if there is, then search the videos array for a matching video and use that.
			if (typeof id === "undefined") {
				setVideo(data[0]);
			} else {
				data.forEach((video) => {
					if (video.id === id) setVideo(video);
				});
			}

			setVideos(data);
		});
	}, [id]);

	useEffect(() => {
		if (video === 0) return;
		getDetails(video.id).then((data) => {
			setDetails(data);
		});
	}, [id]);

	if (videos.length < 1) return <div>Loading...</div>;

	//remove current video from the list
	const filteredVideos = videos.filter((video) => {
		if (video.id !== id) return video;
		return false;
	});

	return (
		<div className="main">
			<Player video={video} id={id} />
			<div className="main__container">
				<div className="main__details">
					<Details details={details} />
					{/* <Comments/> */}
				</div>
				<div className="main__videos">
					<Videos videos={filteredVideos} />
				</div>
			</div>
		</div>
	);
}

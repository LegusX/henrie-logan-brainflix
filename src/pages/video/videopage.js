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
		getVideos().then((videosData) => {
			//if there isn't an id paramater, then this is for the home page and we should use the first video in the array
			//if there is, then search the videos array for a matching video and use that.
			//afterwards, get the details for the chosen video
			if (typeof id === "undefined") {
				setVideo(videosData[0]);

				getDetails(videosData[0].id).then((detailsData) => {
					setDetails(detailsData);
				});
			} else {
				videosData.forEach((video) => {
					if (video.id === id) {
						setVideo(video);

						getDetails(video.id).then((detailsData) => {
							setDetails(detailsData);
						});
					}
				});
			}

			setVideos(videosData);
		});
	}, [id]);

	//remove current video from the list
	const filteredVideos = videos.filter((video) => {
		if (video.id !== id) return video;
		return false;
	});

	//if we don't have an id to filter out, then just remove the first one.
	if (typeof id === "undefined") filteredVideos.shift();

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

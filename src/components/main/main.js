import "./main.scss";

import { useState } from "react";
import Player from "../player/player";
import Details from "../details/details";
import Video from "../../video";
import Videos from "../videos/videos";

import videosData from "../../data/videos.json";
import detailsData from "../../data/video-details.json";

// class Main extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.videos = videosData.map((video) => {
// 			//Go through detailsData manually because there is no guarantee the indexes will line up with videosData
// 			for (let i = 0; i < detailsData.length; i++) {
// 				let detail = detailsData[i];
// 				if (detail.id === video.id) return new Video(video, detail);
// 			}
// 		});

// 		this.state = {
// 			selected: this.videos[0],
// 		};
// 	}

// 	changeVideo(video) {
// 		console.log(video);
// 		console.log(this.state.selected);
// 		let start = Date.now();
// 		this.setState(
// 			{
// 				selected: { ...video },
// 			},
// 			() => console.log(Date.now() - start)
// 		);
// 	}

// 	render() {
// 		return (
// 			<div className="main">
// 				<Player video={this.state.selected} />
// 				<div className="main__container">
// 					<div className="main__details">
// 						<Details video={this.state.selected} />
// 						{/* <Comments/> */}
// 					</div>
// 					<div className="main__videos">
// 						<Videos
// 							selected={this.state.selected}
// 							videos={this.videos}
// 							changeVideo={(video) => this.setState({ video: { ...video } })}
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

export default function Main() {
	const videos = videosData.map((video) => {
		//Go through detailsData manually because there is no guarantee the indexes will line up with videosData
		for (let i = 0; i < detailsData.length; i++) {
			let detail = detailsData[i];
			if (detail.id === video.id) return new Video(video, detail);
		}
	});

	const [selectedVideo, selectVideo] = useState(videos[0]);

	return (
		<div className="main">
			<Player id={selectedVideo.id} videos={videos} />
			<div className="main__container">
				<div className="main__details">
					<Details id={selectedVideo.id} videos={videos} />
					{/* <Comments/> */}
				</div>
				<div className="main__videos">
					<Videos
						id={selectedVideo.id}
						videos={videos}
						changeVideo={(video) => {
							selectVideo({ ...video });
						}}
					/>
				</div>
			</div>
		</div>
	);
}

class Video {
	constructor(video, details) {
		this.id = video.id;
		this.channel = video.channel;
		this.image = video.image;
		this.title = video.title;
		this.comments = details.comments;
		this.desc = details.description;
		this.duration = details.duration;
		this.likes = details.likes;
		this.time = details.timestamp;
		this.views = details.views;
		this.url = details.video;
	}
}

export default Video;

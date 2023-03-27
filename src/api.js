import axios from "axios";

const BASEURL = "localhost:8080";
const CONFIG = {
	headers: {
		"Content-Type": "application/json",
	},
};

export async function getVideos() {
	try {
		const res = await axios.get(BASEURL + "/videos", CONFIG);
		return res.data;
	} catch (e) {
		console.error("Failed to GET video list.");
	}
}

export async function getDetails(id) {
	try {
		const res = await axios.get(BASEURL + "/videos/" + id, CONFIG);
		//return more detailed error message if the error code is 404 or 400
		if (res.status === 404 || res.status === 400)
			console.error(`Failed to GET video details.\n${res.data.message}`);
		return res.data;
	} catch (e) {
		console.error("Failed to GET video details.");
	}
}

export async function uploadVideo(video) {
	return;
}

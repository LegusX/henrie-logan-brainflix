import axios from "axios";

const BASEURL = "http://localhost:8080";
const GETCONFIG = {
	headers: {
		"Content-Type": "application/json",
	},
};

export async function getVideos() {
	try {
		const res = await axios.get(BASEURL + "/videos", GETCONFIG);
		return res.data;
	} catch (e) {
		console.error("Failed to GET video list.");
		console.error(e);
	}
}

export async function getDetails(id) {
	try {
		const res = await axios.get(BASEURL + "/videos/" + id, GETCONFIG);
		//return more detailed error message if the error code is 404 or 400
		if (res.status === 404 || res.status === 400)
			console.error(`Failed to GET video details.\n${res.data.message}`);
		return res.data;
	} catch (e) {
		console.error("Failed to GET video details.");
		console.error(e);
	}
}

export async function uploadVideo(data) {
	try {
		//upload video and return the id of the new video
		const { id } = await axios.post(BASEURL + "/videos", data, {
			headers: { "Content-Type": "multipart/form-data" },
		});
		return id;
	} catch (e) {
		console.error("Failed to POST video");
		console.error(e);
	}
	return;
}

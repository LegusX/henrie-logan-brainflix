import axios from "axios";

const KEY = "9d7c83f8-ea0f-400b-8dd3-655bb156cd43";
const BASEURL = "https://project-2-api.herokuapp.com";
const CONFIG = {
	params: {
		api_key: KEY,
	},
	headers: {
		"Content-Type": "application/json",
	},
};

export async function getVideos() {
	try {
		let res = await axios.get(BASEURL + "/videos", CONFIG);
		return res.data;
	} catch (e) {
		console.error("Failed to GET video list.");
	}
}

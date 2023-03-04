import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getVideos } from "./api";

import "./App.scss";
import Nav from "./components/nav/nav.js";
import VideoPage from "./pages/video/videopage.js";
import Upload from "./pages/upload/upload.js";

async function App() {
	const videos = await getVideos();
	const firstVideo = videos[0];

	return (
		<div className="App">
			<BrowserRouter>
				<Nav></Nav>
				<Routes>
					<Route
						path="/"
						element={<VideoPage videos={videos} video={firstVideo.id} />}
					/>
					<Route
						path="/video/:id"
						element={<VideoPage videos={videos} video={firstVideo.id} />}
					/>
					<Route path="/upload" element={<Upload />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

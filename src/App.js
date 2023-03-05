import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getVideos } from "./api";
import { useState, useEffect } from "react";

import "./App.scss";
import Nav from "./components/nav/nav.js";
import VideoPage from "./pages/video/videopage.js";
import Upload from "./pages/upload/upload.js";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<VideoPage />} />
					<Route path="/videos/:id" element={<VideoPage />} />
					<Route path="/upload" element={<Upload />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

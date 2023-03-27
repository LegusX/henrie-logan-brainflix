import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Nav from "./components/nav/nav.jsx";
import VideoPage from "./pages/video/videopage.jsx";
import Upload from "./pages/upload/upload.jsx";

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

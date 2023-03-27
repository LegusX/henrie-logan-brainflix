import "./upload.scss";
import defaultImage from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import uploadIcon from "../../assets/icons/upload.svg";

import Button from "../../components/button/button";
import { useNavigate } from "react-router-dom";

export default function Upload() {
	const navigate = useNavigate();

	function publish() {
		alert("Video Published!");
		navigate("/");
	}

	return (
		<div className="upload">
			<h1 className="upload__title">Upload Video</h1>
			<div className="upload__container">
				<div className="upload__left">
					<p className="upload__subtitle">Video Thumbnail</p>
					{/* <img src={defaultImage} className="upload__thumbnail" alt="" /> */}
					<form>
						<input type="file" id="file_upload" className="upload__file" />
						<label for="file_upload">
							<Button icon={uploadIcon}>Upload Thumbnail</Button>
						</label>
					</form>
				</div>
				<div className="upload__right">
					<div>
						<p className="upload__subtitle">Title Your Video</p>
						<input
							className="upload__input"
							placeholder="Add a title to your video"
						/>
					</div>
					<div>
						<p className="upload__subtitle">Add a video description</p>
						<textarea
							className="upload__input upload__textarea"
							placeholder="Add a description to your video"
						/>
					</div>
				</div>
			</div>
			<div className="upload__actions">
				<Button icon={publishIcon} click={() => publish()}>
					Publish
				</Button>
				<Button inverted={true}>Cancel</Button>
			</div>
		</div>
	);
}

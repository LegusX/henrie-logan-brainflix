import "./upload.scss";
import publishIcon from "../../assets/icons/publish.svg";
import uploadIcon from "../../assets/icons/upload.svg";

import Button from "../../components/button/button";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { uploadVideo } from "../../api";

export default function Upload() {
	const navigate = useNavigate();
	const fileUploadDiv = useRef();
	const fileUpload = useRef();
	const videoTitle = useRef();
	const videoDescription = useRef();
	const [thumbnail, setThumbnail] = useState("");

	async function publish() {
		const data = new FormData();

		if (thumbnail.length > 0) data.append("image", fileUpload.current.files[0]);
		else return alert("You need to choose a thumbnail!");

		if (videoTitle.current.value.length > 0)
			data.append("title", videoTitle.current.value);
		else return alert("You need to add a title!");

		if (videoDescription.current.value.length > 0)
			data.append("description", videoDescription.current.value);
		else return alert("You need to add a title!");

		const id = await uploadVideo(data);

		console.log(data);
		alert("Video Published!");
		navigate("/videos/" + id);
	}

	function cancel() {
		navigate("/");
	}

	function previewThumbnail() {
		const url = URL.createObjectURL(fileUpload.current.files[0]);
		setThumbnail(url);
	}

	return (
		<div className="upload">
			<h1 className="upload__title">Upload Video</h1>
			<form className="upload__container">
				<div className="upload__left">
					<p className="upload__subtitle">Video Thumbnail</p>
					<img
						src={thumbnail}
						className={`upload__thumbnail ${
							thumbnail.length > 0 ? "" : "upload__thumbnail--hidden"
						}`}
						alt=""
					/>
					<div
						ref={fileUploadDiv}
						className={`upload__fileDiv ${
							thumbnail.length > 0 ? "upload__fileDiv--hidden" : ""
						}`}
					>
						<input
							type="file"
							id="file_upload"
							className="upload__file"
							accept="image/*"
							ref={fileUpload}
							onChange={() => previewThumbnail()}
						/>
						<label for="file_upload">
							<Button icon={uploadIcon}>Upload Thumbnail</Button>
						</label>
					</div>
				</div>
				<div className="upload__right">
					<div>
						<p className="upload__subtitle">Title Your Video</p>
						<input
							className="upload__input"
							placeholder="Add a title to your video"
							ref={videoTitle}
						/>
					</div>
					<div>
						<p className="upload__subtitle">Add a video description</p>
						<textarea
							className="upload__input upload__textarea"
							placeholder="Add a description to your video"
							ref={videoDescription}
						/>
					</div>
				</div>
			</form>
			<div className="upload__actions">
				<Button icon={publishIcon} click={() => publish()}>
					Publish
				</Button>
				<Button inverted={true} click={() => cancel()}>
					Cancel
				</Button>
			</div>
		</div>
	);
}

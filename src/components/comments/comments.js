import Comment from "./comment/comment";

import "./comments.scss";

export default function Comments({ comments }) {
	console.log(comments);
	if (typeof comments === "undefined") return <div>Loading...</div>;

	const commentComponents = comments.map((comment) => (
		<Comment comment={comment} />
	));

	return (
		<div className="comments">
			<h4 className="comments__count">{comments.length} Comments</h4>
			<div className="comments__join"></div>
			<div className="comments__list">{commentComponents}</div>
		</div>
	);
}

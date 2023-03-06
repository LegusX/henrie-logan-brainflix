import "./comment.scss";

export default function Comment({ comment }) {
	const time = new Date(comment.timestamp).toLocaleDateString();
	return (
		<div className="comment" key={comment.id} data-id={comment.id}>
			<div className="comment__img"></div>
			<div className="comment__inner">
				<div className="comment__info">
					<p className="comment__name">{comment.name}</p>
					<div>
						<p className="comment__time">{time}</p>
					</div>
				</div>
				<p>{comment.comment}</p>
			</div>
		</div>
	);
}

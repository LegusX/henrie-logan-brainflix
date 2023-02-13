import "./details.scss";

import React from "react";

import views from "../../assets/icons/views.svg";
import like from "../../assets/icons/likes.svg";

class Details extends React.Component {
	constructor(props) {
		super(props);
		this.state = { video: props.video };
	}

	render() {
		const time = new Date(this.state.video.time).toLocaleDateString();

		return (
			<div className="details">
				<h2 className="details__title">{this.state.video.title}</h2>
				<div className="details__info">
					<div>
						<p className="details__channel">By {this.state.video.channel}</p>
						<p className="details__text">{time}</p>
					</div>
					<div>
						<div>
							<img src={views} className="details__icon" />
							<p className="details__text">{this.state.video.views}</p>
						</div>
						<div>
							<img src={like} className="details__icon" />
							<p className="details__text">{this.state.video.likes}</p>
						</div>
					</div>
				</div>
				<p className="details__desc">{this.state.video.desc}</p>
			</div>
		);
	}
}

export default Details;

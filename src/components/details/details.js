import "./details.scss";

import React from "react";

import views from "../../assets/icons/views.svg";
import like from "../../assets/icons/likes.svg";

export default function Details({ details }) {
	const time = new Date(details.time).toLocaleDateString();
	return (
		<div className="details">
			<h2 className="details__title">{details.title}</h2>
			<div className="details__info">
				<div>
					<p className="details__channel">By {details.channel}</p>
					<p className="details__text">{time}</p>
				</div>
				<div>
					<div>
						<img src={views} className="details__icon" alt="" />
						<p className="details__text">{details.views}</p>
					</div>
					<div>
						<img src={like} className="details__icon" alt="" />
						<p className="details__text">{details.likes}</p>
					</div>
				</div>
			</div>
			<p className="details__desc">{details.desc}</p>
		</div>
	);
}

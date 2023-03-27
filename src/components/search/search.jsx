import "./search.scss";
import icon from "../../assets/icons/search.svg";

function search() {
	return (
		<div className="search">
			<img src={icon} className="search__icon" alt=""></img>
			<input
				id="searchbar"
				className="search__input"
				placeholder="Search"
			></input>
		</div>
	);
}

export default search;

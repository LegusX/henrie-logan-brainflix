import { Link } from "react-router-dom";

import "./nav.scss";
import Button from "../button/button";
import Search from "../search/search";
import Icon from "../icon/icon";

import Upload from "../../assets/icons/upload.svg";
import DefaultIcon from "../../assets/images/Mohan-muruge.jpg";
import Logo from "../../assets/logo/BrainFlix-logo.svg";

function Nav() {
	return (
		<nav className="nav">
			<div className="nav__logo">
				<Link to={"/"}>
					<img src={Logo}></img>
				</Link>
			</div>
			<div className="nav__right">
				<div className="nav__search">
					<Search></Search>
					<Icon src={DefaultIcon} className="nav__icon"></Icon>
				</div>
				<Link to={"/upload"}>
					<Button icon={Upload}>Upload</Button>
				</Link>
				<Icon src={DefaultIcon} className="nav__icon--tablet"></Icon>
			</div>
		</nav>
	);
}

export default Nav;

import "./nav.scss";
import Button from "../button/button";
import Upload from "../../assets/icons/upload.svg";

function Nav() {
	return (
		<nav>
			<Button icon={Upload}>Upload</Button>
		</nav>
	);
}

export default Nav;

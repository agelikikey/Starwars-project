import React from "react";
import { PropTypes } from "prop-types";

// these are notes for creating a dynamic card component.
export function Card(props) {
	return (
		<div className="border m-3" style={{ width: "300px" }}>
			<img className="card-img-top" src={props.picture} alt="Card image cap" />
			<div className="card-body text-center">
				<h5 className="card-title"> {props.title} </h5>
				<p className="card-text">Starwars. </p>
				<button>
					<a href={props.dUrl} className={props.buttonColor}>
						{/* className={"btn btn-" + props.buttonColor}> */}
						Click Me
					</a>
				</button>
			</div>
		</div>
	);
}
Card.propTypes = {
	title: PropTypes.string,
	picture: PropTypes.string,
	dUrl: PropTypes.string,
	buttonColor: PropTypes.string
};

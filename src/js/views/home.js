import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "./card";

export function Home() {
	const [planets, setPlanets] = useState([]);
	const [people, setPeople] = useState([]);
	const [films, setFilms] = useState([]);
	const [species, setSpecies] = useState([]);
	const [vehicles, setVehicles] = useState([]);
	const [starships, setStarships] = useState([]);
	useEffect(() => {
		fetch("https://swapi.co/api/planets/")
			.then(resp => resp.json())
			.then(data => {
				setPlanets(data.results);
				// console.log(data);
			});
		fetch("https://swapi.co/api/people/")
			.then(resp => resp.json())
			.then(data => {
				setPeople(data);
				// console.log(data);
			});
		fetch("https://swapi.co/api/films/")
			.then(resp => resp.json())
			.then(data => {
				setFilms(data);
				// console.log(data);
			});
		fetch("https://swapi.co/api/species/")
			.then(resp => resp.json())
			.then(data => {
				setSpecies(data);
				// console.log(data);
			});
		fetch("https://swapi.co/api/vehicles/")
			.then(resp => resp.json())
			.then(data => {
				setVehicles(data);
				// console.log(data);
			});
		fetch("https://swapi.co/api/starships/")
			.then(resp => resp.json())
			.then(data => {
				setStarships(data);
				// console.log(data);
			});
	}, []);
	return (
		<>
			<div className="card-group d-flex justify-content-center">
				{planets.map((item, index) => {
					return <Card key={index} title={item.terrain} planets={item.image} />;
				})}
			</div>
			<div className="card-group d-flex justify-content-center">
				{people.results &&
					people.results.map((item, index) => {
						return <Card key={index} title={item.name} picture={item.image} />;
					})}
			</div>
			<div className="card-group d-flex justify-content-center">
				{films.results &&
					films.results.map((item, index) => {
						return <Card key={index} title={item.title} picture={item.image} />;
					})}
			</div>
			<div className="card-group d-flex justify-content-center">
				{species.results &&
					species.results.map((item, index) => {
						return <Card key={index} title={item.skin_colors} picture={item.image} />;
					})}
			</div>
			<div className="card-group d-flex justify-content-center">
				{vehicles.results &&
					vehicles.results.map((item, index) => {
						return <Card key={index} title={item.manufacturer} picture={item.image} />;
					})}
			</div>
			<div className="card-group d-flex justify-content-center">
				{starships.results &&
					starships.results.map((item, index) => {
						return <Card key={index} title={item.passengers} picture={item.image} />;
					})}
			</div>
		</>
	);
}

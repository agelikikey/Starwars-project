import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "./card";

export function Home() {
	const [planets, setPlanets] = useState([]);
	useEffect(() => {
		fetch("https://swapi.co/api/planets/")
			.then(resp => resp.json())
			.then(data => {
				setPlanets(data);
                // console.log(data);
            fetch("https://swapi.co/api/people/")
			.then(resp => resp.json())
			.then(data => {
			    setPeople(data);
                // console.log(data);
                fetch("https://swapi.co/api/films/")
			.then(resp => resp.json())
			.then(data => {
				setFilms(data);
                // console.log(data);
			});
	}, []);
	return (
    <>
			<div className="row">
				{planets.results &&
					planets.results.map((item, index) => {
						return <Card key={index} title={item.terrain} planets={item.image} />;
					})}
			</div>
            <div className="row">
				{people.results &&
					people.results.map((item, index) => {
						return <Card key={index} title={item.vehicles} picture={item.image} />;
					})}
			</div>
             <div className="row">
				{films.results &&
					films.results.map((item, index) => {
						return <Card key={index} title={item.characters} picture={item.image} />;
					})}
			</div>
        </>
    );
    }
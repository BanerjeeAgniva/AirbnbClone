import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

const CardData = data.map(card => {
    return (
        <Card
            key={card.id}  // Adding a key to each card to avoid React warnings
            img={card.coverImg}  // Use coverImg instead of img
            rating={card.stats.rating}  // Access rating from stats
            reviewCount={card.stats.reviewCount}  // Access reviewCount from stats
            location={card.location}
            title={card.title}
            price={card.price}
            openSpots={card.openSpots}  // You might also want to pass this to the Card
        />
    );
});

export default function App() {
    return (
        <div>
            <Navbar /> 
            <Hero />
            {CardData}
        </div>
    );
}

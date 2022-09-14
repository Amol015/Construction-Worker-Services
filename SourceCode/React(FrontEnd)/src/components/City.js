import { useState } from "react";
import React from "react";
import Component2 from "./Component2";

export default function City() {
    const [city, setCity] = useState(" ");
    return (
        <div>
            <select
                id="fruits"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            >
                <option>--Select One--</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Prayagraj">Prayagraj</option>
                <option value="Indore">Indore</option>
            </select>
            {/* <h1>Selected City: {city}</h1> */}
            <Component2 name={city}></Component2>
        </div>
    );
}

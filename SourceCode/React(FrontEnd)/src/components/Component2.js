import React from "react";

export default function Component2(props) {
    return (
        <div>
            <h1>
                Selected City:<h1 style={{ color: "red" }}>{reverse1(props.name)}</h1>
            </h1>
        </div>
    );
}

function reverse1(city1) {
    let splitCity = city1.split("");
    let revCity = splitCity.reverse();
    let newCity = revCity.join("");
    return newCity;
}

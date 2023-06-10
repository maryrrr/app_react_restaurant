import React, { useState, useEffect } from "react";

const Greeting = (props) => {

const [favoriteName, setFavoriteName] = useState(props.favoriteName);
useEffect(() => {
setTimeout(() => {
    setFavoriteName("Alfonsina");
}, 3000);
}, []);
return <h1>Hola {favoriteName}</h1>;

};

export default Greeting;
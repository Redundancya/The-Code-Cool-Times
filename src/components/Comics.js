import React, { useEffect, useState } from 'react';

export default function Comics() {

    
    const getRandomComics = () => {
        const sampleComics = [24, 25, 26, 27, 28, 29, 22, 21, 20, 19, 18, 17];
        const randomNum = sampleComics[Math.floor(Math.random()*sampleComics.length)];
        return `http://images.ucomics.com/comics/ga/2000/ga0007${randomNum}.gif`;
    } 
    
    const [url, setUrl] = useState(getRandomComics());

    useEffect(() => {
        setInterval(() => {
            setUrl(getRandomComics());
        }, 30000);
        }, []);


    return (
        <img src={url} alt="garfield-comics"></img>
        );
}

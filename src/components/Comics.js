import React from 'react';

export default function Comics() {
    
    const getRandomComics = () => {
            const sampleComics = [24, 25, 26, 27, 28, 29, 22, 21, 20, 19, 18, 17];
            return sampleComics[Math.floor(Math.random()*sampleComics.length)];
        }

    const url = `http://images.ucomics.com/comics/ga/2000/ga0007${getRandomComics()}.gif`;

    return (
    <img src={url}
    alt="garfield"></img>);
}
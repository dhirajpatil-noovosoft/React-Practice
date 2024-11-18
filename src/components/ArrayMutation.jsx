import React, { useState } from 'react';

let nextId = 0;
const A = ({ artists, setArtist }) => {
    return <button onClick={() => {
        setArtist([
            ...artists,
            {id: artists[artists.length - 1].id + 1,name: 'someName'},
        ])
        setArtist(()=> {
               return[ ...artists,
                {id: artists[artists.length - 1].id + 1,name: 'someName'}]
        });
    }}>
        Add artist
    </button>
}
export default function List() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    // {
    //     setofActions
    // }, [dep_array]
    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => {
                setArtists([
                    ...artists,
                    { id: nextId++, name: name }
                ]);
            }}>Add</button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    );
}
// A@email.com   |
// B@email.com   |
// C@emai.com    |
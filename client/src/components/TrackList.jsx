import React, { useState, useEffect } from 'react';
import { TextField, } from '@material-ui/core';
import useFuse from "use-fuse";

import Track from './Track'
import { getTracks, getTrackById, getTrackByArtist } from '../api/tracks.api'

import './styles.css'

const initialValue = [];

const Tracks = (props) => {
    const [tracks, setTracks] = useState(initialValue);
    const [search, setSearch] = useState("");

    const id = props.match.params.id
    const artist = props.match.params.name

    const options = {
        keys: ["title", "artist"],
        threshold: 0.6
      };

    const filteredTracks = useFuse(tracks, search, options);

    useEffect(() => {
      if (id) {
        getTrackById(id).then(response => setTracks([response.data.track]));
      }

      if (artist) {
        getTrackByArtist(artist).then(response => {
          console.log(response)
          if (response.data) setTracks([response.data.track])
        });
      }
      if (!id && !artist) {
        getTracks().then(response => setTracks(response.data.tracks))
      }
  }, [id, artist, tracks])


    const handleChange = (e) => {
        const searchItem = e.target.value
        setSearch(searchItem)
    }

    return (
        <div className='tracks'>
            <TextField
                label="Search input"
                margin="normal"
                variant="outlined"
                onChange={handleChange}
            />
            {(search ? filteredTracks : tracks).map(track =>
                <Track key={track.id} track={track}/>
            )}
        </div>
    )
}


export { Tracks }
import { Router } from "express"
import { getTrackById, getTrackByArtist, getAllTracks } from "../controllers/tracks.controller"


const tracksRoute = (router: Router) => {
    
    router.get('/tracks', getAllTracks)
    
    router.get('/tracks/:id', getTrackById)
    
    router.get('/tracks/artist/:artist', getTrackByArtist)
}

export default tracksRoute;

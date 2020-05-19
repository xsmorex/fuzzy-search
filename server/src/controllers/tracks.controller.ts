import { Request, Response } from 'express';

import tracks from '../models/tracks.model'

export const getTrackById = (req: Request, res: Response) => {
    const { id } = req.params;

    const track = tracks.find((track) => track.id === parseInt(id, 10))
    
    if (track) {
        return res.status(200).json({ track })
    }

    return res.status(404).json({ error: 'Track not found'})
}

export const getTrackByArtist = (req: Request, res: Response) => {
    const { artist } = req.params;

    const track = tracks.find((track) => track.artist === artist)
    
    if (track) {
        return res.status(200).json({ track })
    }

    return res.status(404).json({ error: 'Track not found'})
}

export const getAllTracks = (_req: Request, res: Response) => res.json({ tracks })

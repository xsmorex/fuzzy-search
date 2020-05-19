import * as data from './tracks.json'

export interface ITrack {
    id: number;
    title: string;
    artist: string;
}

const tracks: Array<ITrack> = data.tracks;

export default tracks;

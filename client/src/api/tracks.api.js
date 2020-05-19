import axios from 'axios';

const HOST = 'http://localhost:3001/api/v1';

export const getTracks = async () => {
    const result = axios.get(`${HOST}/tracks`);
    return result
}

export const getTrackById = async (id) => {
    const result = axios.get(`${HOST}/tracks/${id}`);
    return result;
}


export const getTrackByArtist = async (artist) => {
    const result = axios.get(`${HOST}/tracks/artist/${artist}`);
    return result;
}

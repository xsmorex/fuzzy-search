
import tracksRoute from './tracks.route';
import { Router } from 'express';

const routes = (router: Router) => {
    tracksRoute(router);
}

export default routes
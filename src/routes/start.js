import express from 'express';
import typesP from './typesPRoutes.js';

//Initial page route
//Send to dother pages

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'test' });
  });
  app.use(express.json(), typesP);
};

export default routes;

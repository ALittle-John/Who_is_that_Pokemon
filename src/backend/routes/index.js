import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

//Initial page route
//Send to other pages
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = (app) => {
  const frontEndApp = path.join(__dirname, '../../frontend/pages');

  app.route('/').get((req, res) => {
    res.status(200).sendFile(path.join(frontEndApp, 'index.html'));
  });
};

export default routes;

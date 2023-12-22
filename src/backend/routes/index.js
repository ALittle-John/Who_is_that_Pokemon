import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = (app) => {
  const frontEndApp = path.join(__dirname, '../../frontend');

  app.route('/').get((req, res) => {
    res.status(200).sendFile(path.join(frontEndApp, 'index.html'));
  });
};

export default routes;

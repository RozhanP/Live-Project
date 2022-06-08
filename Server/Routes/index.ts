import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req: Express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Home', page:'home'});
});

router.get('/home', function(req: Express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Home', page:'home' });
});

router.get('/about', function(req: Express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'About Us', page:'about' });
});

router.get('/projects', function(req: Express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'My project ', page:'projects' });
});

router.get('/services', function(req: Express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Our services ', page:'services' });
});

router.get('/contact', function(req: Express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'OContact Us', page:'contact' });
});
export default router;
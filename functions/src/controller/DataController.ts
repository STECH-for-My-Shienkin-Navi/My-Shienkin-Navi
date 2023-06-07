import * as express from 'express';
import * as cors from 'cors';

export const DataController = express();
DataController.use(cors({origin: true}));

DataController.get('/', (req, res) => {
  res.json('This is GET methods.');
});

DataController.post('/', (req, res) => {
  res.json('This is POST method.');
})
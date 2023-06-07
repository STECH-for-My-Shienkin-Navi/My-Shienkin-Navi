import * as express from 'express';
import * as cors from 'cors';
import * as admin from 'firebase-admin'

export const DataController = express();
DataController.use(cors({origin: true}));

DataController.get('/', (req, res) => {
  res.json('This is GET methods.');
});

DataController.post('/', async (req, res) => {
  const writeResult = await admin.firestore().collection('message').add({original: "test"});
  res.json({result: `Message with ID: ${writeResult.id} added.`});
})
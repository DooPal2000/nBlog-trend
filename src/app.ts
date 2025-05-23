import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

// MongoDB 연결
mongoose.connect('mongodb://localhost:27017/mydb')
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB connection error:", err));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

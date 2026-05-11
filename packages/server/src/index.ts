import express, { Request, Response } from 'express';
import cors from 'cors';

import { MessageResponse } from '@fullstack-todolist/shared';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/message', (req: Request, res: Response) => {
  const response: MessageResponse = {
    message: 'Связь через Shared Types! 🚀',
    timestamp: Date.now(),
  };
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// src/index.ts
import express from 'express';
import type { Request, Response } from 'express';

const app = express();
const PORT = 5000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello this is Islam!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

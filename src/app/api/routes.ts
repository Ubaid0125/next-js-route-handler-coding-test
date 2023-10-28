import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'public', 'data.csv');

const handler =  (_req:any, res:any) => {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    const items = data.split('\n').map((line) => {
      const [createdAt, filename] = line.split(',');
      return { createdAt, filename };
    });

    res.status(200).json({ items });
  } catch (error) {
    console.error('Error reading data.csv:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
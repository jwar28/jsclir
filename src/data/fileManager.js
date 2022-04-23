import fs from 'fs';

const filePath = './src/data/data.json';

export const saveFile = (data) =>
  fs.writeFileSync(filePath, JSON.stringify(data));

export const readFile = () => {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const data = fs.readFileSync(filePath, { encoding: 'utf-8' });
  return JSON.parse(data);
};

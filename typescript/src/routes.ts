import { Request, Response } from 'express';
import CreateUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = CreateUser({ name: 'felipe', email: 'felipebogo@gmail.com', password: '12345' });
  return response.json({ message: "Helllo World", user });
}
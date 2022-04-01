import { Container, Service } from 'typedi';
import axios, { AxiosResponse } from 'axios';

interface User {
  email: string;
  name: string;
}

@Service()
export default class Fetcher {
  post(email: string, name: string): Promise<User | void> {
    return axios
      .post('http://jsonplaceholder.typicode.com/users', {
        user: { email: email, name: name },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log('ERRRRRRORRRR! do something');
      });
  }
}

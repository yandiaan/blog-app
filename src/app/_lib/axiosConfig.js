import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gorest.co.in/public/v2',
});

const token = '4d932797eb7eba8643df6e4e837bd412a30a4478e0f5fa04f03de9f47967ae27';
instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default instance;

import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 30,
  duration: '300s',
};
export default function () {
  http.get('http://localhost:8888/Core/ClientAPI/List');
  sleep(1);
}

import http from 'k6/http';
import { sleep } from 'k6';
import { randomIntBetween, randomItem, randomString } from "https://jslib.k6.io/k6-utils/1.2.0/index.js";
export const options = {
  vus: 10,
  duration: '10s',
};
export default function () {
  http.get('http://localhost:8888/Core/ClientAPI/List');
  sleep(1);
  const id = randomIntBetween(2, 1000);
  const name = randomString(10);
  const adrresss = randomString(10);
  const payload = JSON.stringify({
    ClientId: id,
    ClientName: name,
    ClientAddress: adrresss
  });
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const resp = http.post(`http://localhost:8888/Core/ClientAPI/Insert`, payload, params); 
  console.log(resp.body);
}

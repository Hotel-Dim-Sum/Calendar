import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    {duration: '1s', target:1000},
    {duration: '10s', target:0},
    {duration: '100s', target:1600},
    {duration: '1000s', target:0}
  ]
};

export default function() {
  const bookId = Math.floor(Math.random() * (9999999)) + 1;
  http.get(`http://localhost:8080/api/bookings/${bookId}`);
  sleep(1);
}

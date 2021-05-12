import { sleep } from 'k6';
import http from 'k6/http';

export const options = {
  stages: [
    { duration: '12s', target: 250 }, // this is a stress test for 1k virtual users
    { duration: '12s', target: 250 }, // starting off slow at 500
    { duration: '12s', target: 500 },// then rampint up to 1k
    { duration: '12s', target: 500 },
    { duration: '12s', target: 0 },
  ],
  ext: {
    loadimpact: {
      distribution: {
        'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 },
      },
    },
  },
};

export default function main() {
  const url = 'http://localhost:5000/products';

  let responses = http.get(`${url}`);



  // Automatically added sleep
  sleep(1);
}


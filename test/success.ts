import 'fs';
import './lib.js';

const noStrictBoolean: object | null | undefined;

function doo() {
  console.warn('haha');
  if (noStrictBoolean) {
    console.warn('haha');
  }
  return 1;
}

doo();

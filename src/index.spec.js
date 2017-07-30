const test = require('ava');
const truncated = require('./index');

test('basic array', (t) => {
  const s = truncated(['ald', 'a', 'ab', 'ac', 'aca', 'acr', 'alabama', 'bellow']).toString();
  t.is(s, 'ald,a,ab,ac,aca,acr,ala,bel');
});

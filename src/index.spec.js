const test = require('ava');
const truncated = require('./index');

test('basic array', (t) => {
  const s = truncated(['ald', 'a', 'ab', 'ac', 'aca', 'acr', 'alabama', 'bellow']).toString();
  t.is(s, 'ald,a,ab,ac,aca,acr,ala,bel');
});

test('seven days of the week', (t) => {
  const s = truncated(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']).toString();
  t.is(s, 'mo,tu,we,th,fr,sa,su');
});

test('three days of the week (from README)', (t) => {
  const s = truncated(['monday', 'tuesday', 'wednesday']).toString();
  t.is(s, 'mo,tu,we');
});
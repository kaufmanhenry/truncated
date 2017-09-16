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
    t.is(s, 'm,t,w');
});

test('array of objects with a namespace', (t) => {
    const s = truncated([{ day: 'monday' }, { day: 'tuesday' }, { day: 'wednesday' }], { namespace: 'day' }).toString();
    t.is(s, 'm,t,w');
});

test('should throw an error if a non-array argument is passed', (t) => {
    try {
        truncated({dummy: true});
        t.fail('function did not throw an error');
    } catch (e) {
        t.is(e.message,'An array is required to truncate.');
    }
});

test('should throw an error if a non-string element is passed in the array', (t) => {
    try {
        truncated(['test', 'test2', {dummy: true}, 'test21']);
        t.fail('function did not throw an error');
    } catch (e) {
        t.is(e.message,'All elements in an array passed to truncated() must be strings.');
    }
});

test('should throw an error if a non-string element is passed in the array', (t) => {
    try {
        truncated(['test', 'test2', 'test21', 'test21']);
        t.fail('function did not throw an error');
    } catch (e) {
        t.is(e.message,'An array passed to truncated() must not contain duplicates at the start.');
    }
});
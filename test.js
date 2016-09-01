import test from 'tape';
import { emojifyText, emojifyTextAsync } from './index';

test('emojifyText', ({ equal, throws, end }) => {
  equal(emojifyText('unicorns'), 'unicorns', 'basic');

  throws(() => { emojifyText(); }, TypeError, 'empty input');
  throws(() => { emojifyText(2); }, TypeError, 'invalid input');
  end();
});

test('async :: basic', ({ equal, end }) => {
  emojifyTextAsync('unicorns').then(result => {
    equal(result, 'unicorns');
    end();
  });
});

test('async :: empty input', ({ equal, end }) => {
  emojifyTextAsync().catch(result => {
    equal(result instanceof TypeError, true);
    end();
  });
});

test('async :: invalid input', ({ equal, end }) => {
  emojifyTextAsync(2).catch(result => {
    equal(result instanceof TypeError, true);
    end();
  });
});

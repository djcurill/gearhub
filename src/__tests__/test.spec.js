import { sum } from '../utils/mathstuff';
import config from '../config';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

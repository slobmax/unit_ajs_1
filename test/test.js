import healthStatus from '../src/index';

test('healthStatus', () => {
  expect(healthStatus({ name: 'мечник', health: 10 })).toBe('critical');
});

test('healthStatus', () => {
  expect(healthStatus({ name: 'маг', health: 50 })).toBe('wounded');
});

test('healthStatus', () => {
  expect(healthStatus({ name: 'лучник', health: 80 })).toBe('healthy');
});

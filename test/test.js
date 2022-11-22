import healthStatus from '../src/index';

test('healthStatus', () => {
  expect(healthStatus({ name: 'мечник', health: 10 })).toBe('critical');
  expect(healthStatus({ name: 'маг', health: 50 })).toBe('wounded');
  expect(healthStatus({ name: 'лучник', health: 80 })).toBe('healthy');
});

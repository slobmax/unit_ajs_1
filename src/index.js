export default function healthStatus(options) {
  let result;
  if (options.health <= 15) {
    result = 'critical';
  }
  if (options.health <= 50 && options.health > 15) {
    result = 'wounded';
  }
  if (options.health <= 100 && options.health > 50) {
    result = 'healthy';
  }
  return result;
}

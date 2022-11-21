export default function healthStatus(options) {
  let result;
  if (options.health <= 30) {
    result = 'critical';
  }
  if (options.health <= 70 && options.health > 30) {
    result = 'wounded';
  }
  if (options.health <= 100 && options.health > 70) {
    result = 'healthy';
  }
  return result;
}

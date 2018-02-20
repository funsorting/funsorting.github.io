export default function isMods(a) {
  return Array.isArray(a) || typeof a === 'object';
}

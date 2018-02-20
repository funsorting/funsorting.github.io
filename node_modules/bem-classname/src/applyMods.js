import flattenMods from './flattenMods';
import identity from './identity';

export default function applyMods(base, mods) {
  if(mods === undefined) {
    return base;
  }

  if(!Array.isArray(mods) && typeof mods !== 'object') {
    mods = [mods];
  } else if(!Array.isArray(mods) && typeof mods === 'object') {
    mods = flattenMods(mods);
  }

  return [base].concat(
    mods.filter(identity).map(mod => `${base}--${mod}`)
  ).join(' ');
}

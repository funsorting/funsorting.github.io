export default function flattenMods(mods) {
  return Object.keys(mods).reduce((memo, key) => {
    if(mods[key]) {
      memo.push(key);
    }

    return memo;
  }, []);
}

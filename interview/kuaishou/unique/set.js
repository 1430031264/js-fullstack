var arr = [1,2,1,3,'1'];
function unique(arr) {
  const seen = new Map();
  return arr.filter((a) => !seen.has(a) && seen.set(a,1));
}
function formatCount(counts: number) {
  let formatCount = '';
  if (counts > Math.pow(10, 8)) {
    formatCount = `${(counts / Math.pow(10, 8)).toFixed(2).slice(0, -3)}亿`;
  } else if (counts > Math.pow(10, 5)) {
    formatCount = `${(counts / Math.pow(10, 4)).toFixed(2).slice(0, -3)}万`;
  } else {
    formatCount = counts + '';
  }
  return formatCount;
}
export {
  formatCount,
}

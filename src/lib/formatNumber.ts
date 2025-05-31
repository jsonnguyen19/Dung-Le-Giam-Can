export const formatNumber = (num: number): string => {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`.replace(".0k", "k");
  }
  return num.toString();
};

export const formatSoldCount = (count: number): string => {
  if (count >= 1000) {
    const thousands = Math.floor(count / 1000);
    const hundreds = Math.floor((count % 1000) / 100);

    if (hundreds === 0) {
      return `${thousands}k`;
    } else {
      return `${thousands}.${hundreds}k`;
    }
  }
  return count.toString();
};

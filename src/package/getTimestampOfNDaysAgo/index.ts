export function getTimestampOfNDaysAgo(n = 7) {
    const currentDate = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(currentDate.getDate() - n);
  
    return sevenDaysAgo.getTime();
  }
  
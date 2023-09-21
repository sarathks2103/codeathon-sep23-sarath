function findMaxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    let buyIndex = 0;
    let sellIndex = 0;
  
    for (let i = 1; i < prices.length; i++) {
      const currentPrice = prices[i];
      const potentialProfit = currentPrice - minPrice;
  
      if (potentialProfit > maxProfit) {
        maxProfit = potentialProfit;
        sellIndex = i;
      }
  
      if (currentPrice < minPrice) {
        minPrice = currentPrice;
        buyIndex = i;
      }
    }
  
    if (maxProfit > 0) {
        const buyPrice = prices[buyIndex];
        const sellPrice = prices[sellIndex];
        return `Buy on day ${buyIndex + 1} at price ${buyPrice}\nSell on day ${sellIndex + 1} at price ${sellPrice}\nMax profit: ${maxProfit}`;
      } else {
        return -1;
      }
    
  }
  
  console.log(findMaxProfit([7,1,5,3,6,4]));
    console.log(findMaxProfit([7,6,4,3,1]));
    console.log(findMaxProfit([1,2,3,4,5]));
    console.log(findMaxProfit([2,1,2,1,0,1,2]));
    console.log(findMaxProfit([2,1,2,1,0,1,2]));
    
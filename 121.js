



// solution with no help (first run) very BAD 

var maxProfit = function (prices) {
  let globalMax = 0;
  let arr = prices;

  while (arr.length > 1) {
    let lastIndex = arr.length - 1;
    let currMax = 0;
    let lowestInd;
    let lowestNum = Number.POSITIVE_INFINITY;

    for (let i = lastIndex - 1; i >= 0; i--) {
      if (arr[i] <= lowestNum) {
        lowestNum = arr[i]
        lowestInd = i;
      }
    }

    let beatenArr = prices.slice(lowestInd);
    currMax = Math.max(...beatenArr) - beatenArr[0];


    if (currMax > globalMax) {
      globalMax = currMax;
    } 

    arr = prices.slice(0, lowestInd);
  }

  return globalMax;
};



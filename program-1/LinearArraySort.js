function sortArray(numbers) {
    const copy = numbers.slice();
    return copy.sort((a, b) => a - b);
  }

    console.log(sortArray([1, 3, 2, 5, 4]));
    console.log(sortArray([1, 2, 3, 4, 5]));
    console.log(sortArray([5, 4, 3, 2, 1]));
    console.log(sortArray([20, 18, 3, 8, 5, 10]));
    console.log(sortArray([2, 20, 3, 8, 5, 10]));
    
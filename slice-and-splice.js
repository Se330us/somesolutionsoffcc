function frankenSplice(arr1, arr2, n) {
  let newarr = arr2.slice();
  newarr.splice(n, 0, ...arr1);
  return newarr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
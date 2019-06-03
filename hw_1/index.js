/**
 * метод создает новый массив элементов, состоящий из элементов массива array
 *  за вычетом элементов массива itemsToExclude
 */
function difference(arr, itemsToExclude) {
  return arr.filter(item => !itemsToExclude.includes(item));
}

console.log(difference([2, 1, 5], [2, 3]));

/**
 * метод принимает массив обьектов array и ключ value по которому
 *  нужно эти обьекты сгруппировать
 */
function groupBy(array, value) {
  const result = {};
  const values = uniq(array).map(item => item[value]);

  values.forEach(
    key =>
      (result[key] = array.filter(arrItem => arrItem[value] === key && arrItem))
  );

  return result;
}

console.log(
  groupBy(
    [
      { gender: "male", name: "Max" },
      { gender: "male", name: "Fred" },
      { gender: "female", name: "Jane" }
    ],
    "gender"
  )
);

/**
 *  если метод принимет многомерный массив, он должен "сплюснуть" его на одно измерение
 */
function flatten(array) {
  return [].concat(...array);

  /*
        or use Array method .flat()
        return array.flat()
    */
}

console.log(flatten([1, [2, [3, [4]], 5]]));

console.log(flatten([1, 2, 3, 4, 5]));

console.log(flatten([1, [2, 3], 4, 5]));

/**
 * метод должен убрать все повторяющиеся элементы из массива
 */
function uniq(array) {
  const set = new Set(array.map(item => item));

  return [...set];
}

console.log(uniq([2, 1, 2]));

/**
 *
 * метод должен собирать элементы массива в группы с заданным размером
 */
function chunk(array, size) {
  let count = 0;
  let result = [];
  array.forEach((item, index) => {
    if (index % size === 0) {
      result[count] = array.slice(index, index + size);
      count++;
    }
  });

  return result;
}

console.log(chunk(["a", "b", "c", "d"], 2));

console.log(chunk(["a", "b", "c", "d"], 3));

console.log(chunk(["a", "b", "c", "d", "e", "f", "g", "h", "k", "l"], 3));

console.log(chunk(["a", "b", "c", "d", "e", "f", "g", "h", "k", "l"], 5));

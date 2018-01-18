//tuto 1
// const { add, map } = require('ramda');
//
// const data = [1, 2, 3, 4];
//
// const incr = add(1);
//
// let res = map(incr, data);
//
// const transform = map(incr)
//
// res = transform(data)
//
// console.log(res);
// console.log(map(x => x)(data));

//tuto 2
// const { add, reduce } = require('ramda');
//
// const data = [1, 2, 3, 4];
//
// const sum = reduce(add, 0);
//
// console.log(sum(data));

//tuto 3
// const { reduce, multiply } = require('ramda');
//
// const data = [1, 2, 3, 4];
//
// const fact = reduce(multiply, 1);
//
// console.log(fact(data));

//tuto 4/5
// const { fromPairs, map, reduce, compose } = require('ramda');
//
// const data = [
//     { id: 1, label: 'data1' },
//     { id: 2, label: 'data2' },
//     { id: 3, label: 'data3' },
//     { id: 4, label: 'data4' },
//   ];

// const toObject = (data) => {
//   const res = {};
//   data.forEach((element) => {
//     res[element.id] = element;
//   })
//
//   return res;
// // }
//
// const toObject = reduce((acc, element) => {acc[element.id] = element; return acc}, {});
//
// // const toObject = reduce((acc, element) => ({...acc, [element.id]: element}), {});
//
// const toPairs = map(x => [x.id, x]);
//
// const toObject = (data) => fromPairs(toPairs(data))
//
// const toObject = compose(fromPairs, toPairs);
//
// console.log(toObject(data));

//tuto 6
// const { concat, reduce } = require('ramda');
//
// const data = [1, 2, 3, 4];
//
// const transformer = (acc, x) => concat(acc, [[x, x]]);
//
// const myMap = (transformer, data) => reduce((acc, x) => transformer(acc, x), [], data);
//
// console.log(myMap(transformer, data));

//tuto 7
// const { filter, identity, times } = require('ramda');
//
// const data = times(identity, 10);
//
// const isOdd = filter(x => x % 2);
//
// console.log(isOdd(data));

//tuto 8
// const { reduce, concat, times, identity } = require('ramda');
//
// const data = times(identity, 10);
//
// const isOdd = x => x % 2;
//
// const isOddReduce = reduce((acc, x) => isOdd(x) ? concat(acc, [x]) : acc, []);
//
// console.log(isOddReduce(data));

//test1 (completed)
// const { map, pick, values, compose } = require('ramda');
// const data = require('./todo.js');
//
// const getPropsValues = (keys) => compose(values, pick(keys));
//
// const getTodoReport = (keys, todos) => map(getPropsValues(keys), todos);
//
// console.log(getTodoReport(['type', 'label', 'dueDate'], data))

// test2 (refactoring)
// const { map, pick, values, compose, filter } = require('ramda');
// const data = require('./todo.js');
//
// const filterDueDate = filter(element => element.dueDate <= new Date())
//
// const getPropsValues = (props) => compose(values, pick(props));
//
// const getTodoReport = (keys, todos) => map(getPropsValues(keys), todos);
//
// console.log(getTodoReport(['type', 'label', 'dueDate'], data));

//test 3 (refactoring)
// const { propOr, reduce, filter, compose } = require('ramda');
// const data = require('./todo.js');
//
// const favorite = (propOr('default', 'type'));
//
// console.log(favorite(data));

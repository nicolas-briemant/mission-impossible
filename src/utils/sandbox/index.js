const {
  // times,
  map,
  // add,
  // reduce,
  // multiply,
  // fromPairs,
  compose,
  // concat,
  // identity,
  filter,
  pick,
  values,
} = require('ramda');

// const data0 = [1, 2, 3, 4];

// const data1 = [
//   { id: 1, label: 'data1' },
//   { id: 2, label: 'data2' },
//   { id: 3, label: 'data3' },
//   { id: 4, label: 'data4' },
// ];
// ### tut1: map
// Should use : { map, [add] }

// const add1 = map(add(1));

// ### tut2: reduce
// Should use : { reduce, add }

// const sum = reduce(add, 0);

// ### tut3: reduce  again
// Should use : { reduce, multiply }

// const factorial = reduce(multiply, 1);

// ### tut4: fromPairs
// ### tut5: compose

// const toPairs = map(x => [x.id, x]);
// const toObject = compose(fromPairs, toPairs);

// // ### tut6: reduce
// // Write `R.map(x => [ x, x ], [1, 2, 3, 4])` with { reduce and concat }.

// const twice = reduce((acc, x) => concat(acc, [[x, x]]), []);

// // ### tut7: filter

// const data2 = times(identity, 10);
// const isOdd = x => x % 2;
// const odd = filter(isOdd);

// ### tut8: filter as reduce

// const oddReduce = reduce((acc, x) => (isOdd(x) ? concat(acc, [x]) : acc), []);

// ### test1: map

// console.log(todos);
// Should use : { compose, pick*, values, map }

const data3 = require('./todos');

const listOfValueToProps = (props, data) => map(pick(props), data);
const getValues = map(x => values(x));
const getTodoReport = compose(getValues, listOfValueToProps);

console.log(getTodoReport(['type', 'label', 'dueDate'], data3)); // eslint-disable-line no-console

// ### test2: map and filter

const getPropsValues = props1 => compose(values, pick(props1));
const getValueDate = (props1, data) => map(getPropsValues(props1), data);
const filterDateGt = filter(listOfDate => Date.parse(listOfDate) >= Date.now());
const listOfDateGt = compose(filterDateGt, getValueDate);

console.log(listOfDateGt(['dueDate'], data3)); // eslint-disable-line no-console

// ### test3: filter and reduce
// Should use : { propOr, reduce, filter, compose }
// const props2 = ['tasks'];

// const getPropsValues = props => compose(values, pick(props));
// const getValues = (props, data3) => map(getPropsValues(props), data3);

// console.log('-----------------------------')
// console.log(getValues(props2, data3));
// console.log('-----------------------------\n')
//

/*const data =[1,2,3,4];
const incr = add(1);
console.log(incr);
const trans = map(incr)
let res = trans(data);

console.log(res);
/*console.log(map(x=>x));
const map = fct =>data=>{
    const res = [];
    data.forEach(element => res.push(fct(element))
    return res;
        
    
}*/

/*const data =[1,2,3,4];
const sum =  reduce(add,0);
console.log(sum(data))


/*const fact = reduce(multiply,1);

console.log(fact(data));
*/
/*const {map,reduce,fromPairs,compose} = require('ramda');
const data = [
    { id: 1, label: 'data1' },
    { id: 2, label: 'data2' },
    { id: 3, label: 'data3' },
    { id: 4, label: 'data4' },
  ];

  /*const toobject = (data)=>{
     const res = [];
      data.forEach((element)=>{
        res[element.id]= element;
      })

      return res;
    }
    console.log(toObject(data));

    //const toObject = reduce((acc,element)=>({...acc,[element.id]:element}),{})
        const toPairs = map(x=>[x.id,x])
    //const toObject =(data)=> fromPairs(toPairs(data))
    const toObject = compose(fromPairs,toPairs)

    console.log(toObject(data));*/

//const b= map(x => [ x, x ], [1, 2, 3, 4])
//console.log(b);
/*const data = [1,2,3,4]
   const b =reduce((acc,x)=>[...acc],[x],{});
   console.log(b(data))*/

/*const data =[1,2,3,4];
    const transfo = (acc,x)=>concat(acc,[[x,x]]);
   const myMap = curry((transfo,data) => reduce((acc,x)=>transfo(acc,x),[],data));

   console.log(MyMap(transfo,data));
*/

/*const data = times(identity, 10);

//console.log(data);
const isOdd = x=>x%2;
const filterOddNumbers = filter(isOdd);
console.log(filterOddNumbers(data));

const oddreduce = reduce((acc,x)=>isOdd(x)?concat(acc,[x]): acc,[]);
console.log*/
//const {map,add,pick,reduce,concat,curry,times,values,toPairs,identity,filter,multiply,fromPairs} = require('ramda');

//const data = [1, 2, 3, 4];
//const incr = add(1);
//res = map(incr,data);

//const sum = reduce(add,0)

//const fact = reduce(multiply,1);
//console.log(fact(data));

/*const data2 = [
    { id: 1, label: 'data1' },
    { id: 2, label: 'data2' },
    { id: 3, label: 'data3' },
    { id: 4, label: 'data4' },
  ];*/
//const toPairs = map(x=>[x.id,x])
// const toObject =(data2)=> fromPairs(toPairs(data2))

//console.log(toObject(data2));

//console.log(map(x => [ x, x ], [1, 2, 3, 4]));
//const transfo = (acc,x)=>concat(acc,[[x,x]]);
//console.log(transfo(data));

/*const data = [
    {
      id: 1,
      label: 'Learning JS stack',
      type: 'learning',
      tasks: [
        {
          id: 1,
          description: 'Learn Promises',
          isDone: false,
          runningTime: 24,
        },
        {
          id: 2,
          description: 'Learn Async.js',
          isDone: true,
          runningTime: 45,
        },
        {
          id: 3,
          description: 'Learn Ramda.js',
          isDone: false,
          runningTime: 13,
        },
      ]
    },
    {
      id: 2,
      label: 'Learning how to craft a SPA',
      dueDate: new Date(2017, 4, 22),
      type: 'learning',
      tasks: [
        {
          id: 1,
          description: 'Learn React',
          isDone: true,
          runningTime: 22,
        },
        {
          id: 2,
          description: 'Learn Redux',
          isDone: false,
          runningTime: 7,
        },
      ]
    },
    {
      id: 3,
      label: 'code first sample',
      dueDate: new Date(2017, 4, 22),
      type: 'coding',
    },
    {
      id: 4,
      label: 'implement tests',
      dueDate: new Date(2016, 12, 11),
      type: 'coding',
    },
  ];
  
  
 const getToDoReport =(a,b,c) => map(x=>[x.a,x.b,x.c]);
  
  console.log(getToDoReport('type','label','dueDate',data))
  
*/

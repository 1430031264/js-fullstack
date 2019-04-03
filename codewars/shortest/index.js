function findShort(str){
  return Math.min.apply(null,str.split(' ').map(x => x.length));
}


// const findShort = str => str.split(' ').map(w => w.length).sort((a,b) => a - b)[0];
console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
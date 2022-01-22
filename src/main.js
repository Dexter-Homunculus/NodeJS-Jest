// default node with jest project
// replit 'run' runs main.js script
// to run test via shell 'npm run test' or 'npm t'
console.log( "Got Here" );


function testfunction1(v1) {
  return v1;
}

function testfunction2(v1) {
  return v1;
}


//expose the required functions, methods, classes, etc
module.exports =  { testfunction1, testfunction2 };
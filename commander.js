const program = require('commander')
program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');

program.option('-i --integer <number>', 'integer argument', 3)
  
console.log(process.argv)

program.parse(process.argv);

if (program.debug) console.log(program.opts());
console.log(program.integer);
if (program.small) console.log('- small pizza size');
if (program.pizzaType) console.log(`- ${program.pizzaType}`);
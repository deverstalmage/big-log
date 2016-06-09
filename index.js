module.exports = function bigLog(...args) {
  let delim = args.splice(0, 1);
  if (typeof delim !== 'string') delim = '*';
  let delimRow = '';
  for (let i = 0; i < 16; i++) delimRow = delimRow + delim;
  console.log('\n');
  console.log(delimRow);
  console.log('\n');
  console.log.apply(this, args);
  console.log('\n');
  console.log(delimRow);
  console.log('\n');
}

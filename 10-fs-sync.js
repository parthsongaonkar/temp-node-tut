const {readFileSync,writeFileSync} = require('fs')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log(first,second)
writeFileSync(
  './content/result-sync.txt',
`Here is those results searching us: ${first},${second}`,
{flag:'a'}
)
console.log('done with these task some')
console.log('need to start another rapidly')
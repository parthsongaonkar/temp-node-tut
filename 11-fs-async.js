const {readFile,writeFile} = require('fs')

console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{
  if(err){
    console.log(err)
    return
  }
  const first = result;
  readFile('./content/second.txt','utf8',(err,result)=>{
if(err){
  console.log(err)
      return
}
const second = result
writeFile(
  './content/result-async.txt',
  `here is those results we want: ${first},${second}`
,(err,result)=>{
  if(err){
    console.log(err)
    return
  }
  console.log('done through given tast to me')
})
  })  
})  
console.log('starting a different in rapidly')
console.log('ending')


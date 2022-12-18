const os = require('os')
//info about current user that is right now me

const user=os.userInfo()
console.log(user)

//method returns uptime of system in seconds
console.log(`The system here uptime is given ${os.uptime()} seconds`)

const currentOS={
    name:os.type(),
    release:os.release(),
    memory:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentOS)
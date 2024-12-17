import { createServer } from 'node:http'


const server = createServer(()=>{
    console.log('start')
})

server.listen(3001)

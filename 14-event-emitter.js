// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

customEmitter.emit('response', 'john', 34)




// const EventEmitter = require('events');

// const costunEmitter = new EventEmitter()

// costunEmitter.on('response', (name, id)=>{
//     console.log(`data recieved ${name} with id: ${id}`)
// });

// costunEmitter.on('response', ()=>{
//     console.log(`some other logic here`)
// })

// costunEmitter.emit('response', 'Eddy', 32)


// const EventEmitter = require('events');

// const costunEmitter = new EventEmitter()

// costunEmitter.on('response', (name, id)=>{
//     console.log(`data recieved ${name} with id: ${id}`)
// });

// costunEmitter.on('response', ()=>{
//     console.log(`some other logic here`)
// })

// costunEmitter.emit('response', 'Eddy', 32)
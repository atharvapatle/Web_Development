//EventEmitter is a class which is produced with the help of events
//User click button, hover,we handle that using the Event Module
//We listen for a specific event and register the function that will execute in response to those events

const EventEmitter=require('events');
//event is a object
const event=new EventEmitter();

// on : listen for an event
event.on('res',(name,id)=>{
    console.log(`Data recieved! Name: ${name} Id: ${id}`);
})
event.on('resp',(done)=>{
    console.log(`Data Cleared! ${done}`);
})

// emit : emit an event
event.emit('res','Atharva',7);
event.emit('resp','done');
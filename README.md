[+] fs.writeFile and fs.writeFileSync
I earlier mentioned that there also is a write file method but we use write file sync, the sync here
stands for synchronous and this is a special method which will actually block code execution until this file is created.
Now working with files is available in two modes, here is the synchronous mode and we block execution of the next line of code until this file is done. Now for this short of a text we enter, this is super fast and we won't even notice it
but think about a huge file, a couple of hundreds of megabytes or even bigger, if you do something with that,
read it, copy it, whatever it is and you block the code execution,
then the next line and all the other code will not continue to run until that file operation is done
and even new incoming requests of other users would not be handled until that file operation is done
and you don't want that, therefore you should not use that syntax here.
You can if you know you'll only have a very short file operation but even then, it's better to use this
write file method here which actually does not just accept the path and the data but also a third argument and that is again such a callback,
so a function that should be executed when it's done.

[+] Streams and buffers concept

[+] understandning event driven code execution
const testing = () =>{ 1. register "listiner 1" but not execute the body now
res.on('listiner 1',() =>{
// execute this body in feature(its a call back)
}) 1. register "listiner 2" but not execute the body now
res.on('listiner 2',() =>{
// execute this body in feature(its a call back)
})
// execute console.log
console.log('hello')
}

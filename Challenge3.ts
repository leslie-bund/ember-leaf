import {createReadStream} from 'fs';

async function getString(){
    const stream = createReadStream('./dummy.txt', {
        encoding: 'utf-8',
        highWaterMark: 16
    })

    let store: string[] = [];
    
    stream.on('data', async (chunk: string) => {
        for await (let i of chunk){
            store.push(i);
        }
    })

    stream.on('close', (chunk: string) => {
        console.log(store)
    })
   // console.log(store)
}

getString()
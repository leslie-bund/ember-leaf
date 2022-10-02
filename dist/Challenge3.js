"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
async function getString() {
    const stream = (0, fs_1.createReadStream)('./dummy.txt', {
        encoding: 'utf-8',
        highWaterMark: 16
    });
    let store = [];
    stream.on('data', async (chunk) => {
        for await (let i of chunk) {
            store.push(i);
        }
    });
    stream.on('close', (chunk) => {
        console.log(store);
    });
    // console.log(store)
}
getString();

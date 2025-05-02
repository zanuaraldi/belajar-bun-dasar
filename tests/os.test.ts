import {describe, it, expect} from 'bun:test';
import * as os from "node:os";

describe('NodeJS API', ()=>{
    it('should support os', async() =>{
        const arch = os.arch();
        console.info(arch);
        
        const type = os.type();
        console.info(type);
        
    })
})
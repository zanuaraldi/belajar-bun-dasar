import {describe, it, expect} from 'bun:test';
import { sayHello } from '../src/hello';

describe('Bun Test Runner', () => {
    it('should support unit test', async () =>{
        const response = sayHello('Aldi');
        expect(response).toBe('Hello Aldi');
    });
});
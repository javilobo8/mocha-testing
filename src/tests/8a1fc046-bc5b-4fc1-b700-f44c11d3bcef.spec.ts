
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8a1fc046-bc5b-4fc1-b700-f44c11d3bcef', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});

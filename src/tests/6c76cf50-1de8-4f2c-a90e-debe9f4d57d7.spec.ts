
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6c76cf50-1de8-4f2c-a90e-debe9f4d57d7', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});

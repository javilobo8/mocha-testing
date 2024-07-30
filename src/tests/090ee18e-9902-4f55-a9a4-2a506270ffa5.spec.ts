
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 090ee18e-9902-4f55-a9a4-2a506270ffa5', () => {
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

    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 32 ms', async () => {
      await delay(32);
    });
  })
});

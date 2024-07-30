
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7da5e988-37e3-4a55-bf51-dcd0c6993fc2', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });
  })
});

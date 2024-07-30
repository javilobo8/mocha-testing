
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 056ad62a-f7e2-4188-8780-b3c6e7cec9ba', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});

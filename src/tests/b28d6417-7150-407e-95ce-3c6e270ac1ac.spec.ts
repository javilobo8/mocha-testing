
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b28d6417-7150-407e-95ce-3c6e270ac1ac', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });
  })
});

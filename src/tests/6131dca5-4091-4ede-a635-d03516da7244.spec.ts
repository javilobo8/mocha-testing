
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6131dca5-4091-4ede-a635-d03516da7244', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 32 ms', async () => {
      await delay(32);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });
  })
});

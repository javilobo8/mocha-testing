
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 71d056a3-11d2-4f1c-97b7-4f94646fec0b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });
  })
});

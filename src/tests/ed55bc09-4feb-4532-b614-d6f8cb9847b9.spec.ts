
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ed55bc09-4feb-4532-b614-d6f8cb9847b9', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});

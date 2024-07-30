
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - cbb4650c-982f-4f6f-b818-270899383de8', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 32 ms', async () => {
      await delay(32);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });
  })
});

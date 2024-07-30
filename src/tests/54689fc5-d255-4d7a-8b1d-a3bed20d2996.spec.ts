
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 54689fc5-d255-4d7a-8b1d-a3bed20d2996', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 32 ms', async () => {
      await delay(32);
    });
  })
});

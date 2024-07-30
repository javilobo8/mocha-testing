
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f5567726-0aed-41d5-a51a-30a0f7e4d5ac', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });
  })
});

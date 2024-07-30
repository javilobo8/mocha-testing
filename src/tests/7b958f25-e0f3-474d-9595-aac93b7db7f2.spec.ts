
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7b958f25-e0f3-474d-9595-aac93b7db7f2', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });
  })
});

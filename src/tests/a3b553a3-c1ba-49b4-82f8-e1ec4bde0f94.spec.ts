
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a3b553a3-c1ba-49b4-82f8-e1ec4bde0f94', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });
  })
});

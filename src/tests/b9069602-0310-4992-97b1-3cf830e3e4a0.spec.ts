
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b9069602-0310-4992-97b1-3cf830e3e4a0', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });
  })
});

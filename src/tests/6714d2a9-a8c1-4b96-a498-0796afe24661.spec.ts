
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6714d2a9-a8c1-4b96-a498-0796afe24661', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });
  })
});

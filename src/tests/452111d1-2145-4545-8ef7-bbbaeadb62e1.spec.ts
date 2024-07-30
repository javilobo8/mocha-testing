
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 452111d1-2145-4545-8ef7-bbbaeadb62e1', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });
  })
});

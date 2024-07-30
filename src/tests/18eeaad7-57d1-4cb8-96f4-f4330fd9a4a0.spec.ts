
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 18eeaad7-57d1-4cb8-96f4-f4330fd9a4a0', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6172b0a9-eb6e-4492-bee5-d0c9b9651ce0', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });
  })
});

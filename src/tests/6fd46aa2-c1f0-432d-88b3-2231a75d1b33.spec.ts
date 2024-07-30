
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6fd46aa2-c1f0-432d-88b3-2231a75d1b33', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 52ab7bda-41a2-4690-98f8-aed1a40c076d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });
  })
});

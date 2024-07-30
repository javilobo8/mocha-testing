
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 92ed220c-0f95-474d-b035-7dc8f70622f8', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });
  })
});

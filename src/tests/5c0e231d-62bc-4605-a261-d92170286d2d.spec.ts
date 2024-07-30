
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5c0e231d-62bc-4605-a261-d92170286d2d', () => {
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

    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });
  })
});

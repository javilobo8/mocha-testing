
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 9178cc1f-20fa-4dac-9d3e-782c2e99518b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });
  })
});

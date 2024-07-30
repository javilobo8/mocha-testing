
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 095292cd-7f1d-4a87-82e5-e65b0e552545', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });
  })
});

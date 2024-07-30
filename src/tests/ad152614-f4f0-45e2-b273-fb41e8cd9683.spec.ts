
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ad152614-f4f0-45e2-b273-fb41e8cd9683', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });
  })
});

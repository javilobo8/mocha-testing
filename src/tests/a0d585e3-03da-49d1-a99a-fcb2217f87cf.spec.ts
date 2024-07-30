
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a0d585e3-03da-49d1-a99a-fcb2217f87cf', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });
  })
});

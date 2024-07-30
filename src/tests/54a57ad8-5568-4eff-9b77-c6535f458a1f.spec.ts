
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 54a57ad8-5568-4eff-9b77-c6535f458a1f', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 46 ms', async () => {
      await delay(46);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });
  })
});

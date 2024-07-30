
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5de146b7-5dd2-4b5f-8701-3491200afef5', () => {
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

    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });
  })
});

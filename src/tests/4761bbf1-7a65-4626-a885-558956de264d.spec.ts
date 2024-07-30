
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 4761bbf1-7a65-4626-a885-558956de264d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - fac8bb95-e6d5-49d0-b6ac-ff1aaf12b009', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});

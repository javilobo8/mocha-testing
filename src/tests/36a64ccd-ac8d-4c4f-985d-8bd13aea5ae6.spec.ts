
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 36a64ccd-ac8d-4c4f-985d-8bd13aea5ae6', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });
  })
});

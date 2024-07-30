
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3c2f677c-c93a-4d52-b0cc-76d79f8290cd', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});

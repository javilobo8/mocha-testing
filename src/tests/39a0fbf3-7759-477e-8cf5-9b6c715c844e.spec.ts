
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 39a0fbf3-7759-477e-8cf5-9b6c715c844e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });
  })
});

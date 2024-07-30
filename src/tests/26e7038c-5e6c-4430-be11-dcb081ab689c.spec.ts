
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 26e7038c-5e6c-4430-be11-dcb081ab689c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });
  })
});

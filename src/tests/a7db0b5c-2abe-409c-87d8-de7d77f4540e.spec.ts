
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a7db0b5c-2abe-409c-87d8-de7d77f4540e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});

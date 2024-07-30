
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d65c1ba1-0259-4b37-bbb2-dbcb2c01dcb7', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 14b2002a-a4f9-4a88-937a-cec43d13acab', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });
  })
});

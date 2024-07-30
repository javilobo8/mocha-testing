
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 20df8729-9010-425e-a1e3-9506a8877116', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 46 ms', async () => {
      await delay(46);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });
  })
});

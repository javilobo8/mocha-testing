
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 811d3dda-baaf-423e-88a9-50fcc97909ad', () => {
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

    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });
  })
});

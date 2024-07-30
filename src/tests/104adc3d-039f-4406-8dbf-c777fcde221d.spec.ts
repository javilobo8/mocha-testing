
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 104adc3d-039f-4406-8dbf-c777fcde221d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });
  })
});

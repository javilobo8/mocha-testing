
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - becfa9e2-f826-4360-a9ec-ba66bc4a2583', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });
  })
});

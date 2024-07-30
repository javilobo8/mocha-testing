
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8d53dab2-57ee-4dcf-8a77-743d64487e87', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });
  })
});

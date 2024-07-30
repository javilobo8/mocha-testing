
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 17e7f7e1-dd73-445f-af4c-dd2456fc42d6', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });
  })
});

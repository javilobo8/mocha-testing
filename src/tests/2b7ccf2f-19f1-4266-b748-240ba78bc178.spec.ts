
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2b7ccf2f-19f1-4266-b748-240ba78bc178', () => {
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

    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });
  })
});

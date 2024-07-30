
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d0b3a245-0c6f-4e14-a054-d0d13ae08a32', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });
  })
});

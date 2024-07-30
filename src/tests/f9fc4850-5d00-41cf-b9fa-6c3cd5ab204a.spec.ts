
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f9fc4850-5d00-41cf-b9fa-6c3cd5ab204a', () => {
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

    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });
  })
});

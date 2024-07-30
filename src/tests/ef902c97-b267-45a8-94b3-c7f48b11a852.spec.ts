
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ef902c97-b267-45a8-94b3-c7f48b11a852', () => {
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

    it('should delay 46 ms', async () => {
      await delay(46);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });
  })
});

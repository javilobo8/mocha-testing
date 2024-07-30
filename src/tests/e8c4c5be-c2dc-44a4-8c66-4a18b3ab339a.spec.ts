
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e8c4c5be-c2dc-44a4-8c66-4a18b3ab339a', () => {
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

    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });
  })
});

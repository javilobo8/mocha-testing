
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5f706fa8-e471-4e7d-9c81-a67da6819ff0', () => {
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

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});

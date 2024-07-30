
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - cad93d6c-5ce6-47b8-a178-ef7e4b1284e8', () => {
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

    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });
  })
});

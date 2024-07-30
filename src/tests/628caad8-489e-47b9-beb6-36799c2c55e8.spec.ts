
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 628caad8-489e-47b9-beb6-36799c2c55e8', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });
  })
});

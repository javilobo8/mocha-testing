
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 833d2433-6784-44e8-bf1a-2143774cc47c', () => {
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

    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });
  })
});

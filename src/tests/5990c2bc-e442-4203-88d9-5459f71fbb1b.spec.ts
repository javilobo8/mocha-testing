
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5990c2bc-e442-4203-88d9-5459f71fbb1b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 30 ms', async () => {
      await delay(30);
    });
  })
});

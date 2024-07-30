
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 37ba9e68-37a9-4dd6-866c-b90b56d5d5c0', () => {
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

    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });
  })
});

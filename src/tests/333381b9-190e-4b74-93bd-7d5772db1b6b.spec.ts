
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 333381b9-190e-4b74-93bd-7d5772db1b6b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });
  })
});

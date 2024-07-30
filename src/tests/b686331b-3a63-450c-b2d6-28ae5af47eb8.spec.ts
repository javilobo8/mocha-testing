
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b686331b-3a63-450c-b2d6-28ae5af47eb8', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7f0e786d-308e-4d4f-a784-6702578baf77', () => {
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

    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });
  })
});

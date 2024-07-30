
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 04b77cb1-c47c-4fe5-a039-10e919122b21', () => {
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

    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });
  })
});

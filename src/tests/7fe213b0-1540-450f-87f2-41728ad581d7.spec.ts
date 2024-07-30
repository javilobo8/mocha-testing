
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7fe213b0-1540-450f-87f2-41728ad581d7', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});

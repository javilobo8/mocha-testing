
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 95952baa-42ca-4a12-a035-726c95442f2f', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ee62b1f1-e8e2-42a8-b078-60fc712f1378', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1cfaa3ee-b01f-4645-9c46-95dd6d7bd6e6', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });
  })
});

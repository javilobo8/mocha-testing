
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - df381e14-ef71-4504-a5cf-e11a213895b1', () => {
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

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });
  })
});

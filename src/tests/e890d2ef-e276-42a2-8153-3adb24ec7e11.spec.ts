
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e890d2ef-e276-42a2-8153-3adb24ec7e11', () => {
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

    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });
  })
});

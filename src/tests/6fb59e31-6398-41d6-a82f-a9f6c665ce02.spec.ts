
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6fb59e31-6398-41d6-a82f-a9f6c665ce02', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});

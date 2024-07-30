
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 556f6ed7-e5e0-4ee2-a777-f27af4c27bd7', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 36 ms', async () => {
      await delay(36);
    });
  })
});

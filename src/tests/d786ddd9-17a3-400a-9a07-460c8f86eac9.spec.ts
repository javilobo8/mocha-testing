
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d786ddd9-17a3-400a-9a07-460c8f86eac9', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });
  })
});

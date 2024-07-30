
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 62088ce7-966f-4c60-a547-b3d1d1e4f939', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });
  })
});

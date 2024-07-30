
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - beea0fb0-f126-4e51-a795-ec3e0f4e3795', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});

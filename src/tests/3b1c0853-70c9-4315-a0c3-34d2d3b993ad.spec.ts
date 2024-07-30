
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3b1c0853-70c9-4315-a0c3-34d2d3b993ad', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });
  })
});

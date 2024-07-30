
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b2ce5602-aec3-4e2b-92a2-1af4f49b9c70', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });
  })
});

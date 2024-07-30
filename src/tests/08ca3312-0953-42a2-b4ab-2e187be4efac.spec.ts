
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 08ca3312-0953-42a2-b4ab-2e187be4efac', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });
  })
});

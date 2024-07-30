
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 64173041-4afe-4ada-a3d8-5fc070555422', () => {
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

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });
  })
});

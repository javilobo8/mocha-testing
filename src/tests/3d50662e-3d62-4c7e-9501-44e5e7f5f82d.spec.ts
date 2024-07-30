
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3d50662e-3d62-4c7e-9501-44e5e7f5f82d', () => {
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

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});

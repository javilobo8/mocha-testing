
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e6a01e0c-097a-4e9e-a5ea-7501c31ea509', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });
  })
});

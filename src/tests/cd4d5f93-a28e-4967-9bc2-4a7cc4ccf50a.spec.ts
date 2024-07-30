
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - cd4d5f93-a28e-4967-9bc2-4a7cc4ccf50a', () => {
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

    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });
  })
});

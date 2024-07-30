
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3cf6049c-216e-4380-8bab-24bd6c010679', () => {
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

    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });
  })
});

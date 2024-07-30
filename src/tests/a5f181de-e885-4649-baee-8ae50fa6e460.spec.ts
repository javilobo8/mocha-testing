
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a5f181de-e885-4649-baee-8ae50fa6e460', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ee4680d5-6a04-4919-bd42-aafa63b46460', () => {
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

    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });
  })
});

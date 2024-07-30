
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - fed6c350-b374-4c53-89ac-21b4233abf4d', () => {
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

    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });
  })
});

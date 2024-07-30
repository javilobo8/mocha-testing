
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - bbdf214c-e3a7-4102-b8c9-cddfddff1f76', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 23 ms', async () => {
      await delay(23);
    });
  })
});

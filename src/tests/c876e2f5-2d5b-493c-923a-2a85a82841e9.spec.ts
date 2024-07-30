
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c876e2f5-2d5b-493c-923a-2a85a82841e9', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });
  })
});

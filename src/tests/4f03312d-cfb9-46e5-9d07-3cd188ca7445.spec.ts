
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 4f03312d-cfb9-46e5-9d07-3cd188ca7445', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});

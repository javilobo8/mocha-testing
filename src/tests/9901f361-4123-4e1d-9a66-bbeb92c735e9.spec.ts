
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 9901f361-4123-4e1d-9a66-bbeb92c735e9', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});

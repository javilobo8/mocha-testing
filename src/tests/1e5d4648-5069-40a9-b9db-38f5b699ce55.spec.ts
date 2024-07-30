
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1e5d4648-5069-40a9-b9db-38f5b699ce55', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 28294e00-8a0c-4d8e-aa4f-8d21e4c3aaa3', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });
  })
});

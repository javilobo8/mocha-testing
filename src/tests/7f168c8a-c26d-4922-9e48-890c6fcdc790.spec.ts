
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7f168c8a-c26d-4922-9e48-890c6fcdc790', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });
  })
});

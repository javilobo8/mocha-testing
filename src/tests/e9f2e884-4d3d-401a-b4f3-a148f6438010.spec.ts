
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e9f2e884-4d3d-401a-b4f3-a148f6438010', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 99d3e8d9-dbed-4733-85f4-629193413971', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });
  })
});

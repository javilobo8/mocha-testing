
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6cfc6549-6ec7-4dcc-b632-0d3cd1d3378e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});

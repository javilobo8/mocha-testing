
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5962b415-083d-4115-8b52-455df9dcc59d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });
  })
});

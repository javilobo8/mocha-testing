
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ed4d7138-b11d-4065-bfa3-91d7f97f1449', () => {
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

    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });
  })
});

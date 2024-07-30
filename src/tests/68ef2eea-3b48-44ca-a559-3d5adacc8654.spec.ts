
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 68ef2eea-3b48-44ca-a559-3d5adacc8654', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 37 ms', async () => {
      await delay(37);
    });
  })
});

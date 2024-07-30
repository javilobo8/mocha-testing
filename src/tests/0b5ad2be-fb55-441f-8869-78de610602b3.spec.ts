
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0b5ad2be-fb55-441f-8869-78de610602b3', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 57a489d5-ecb7-4a06-bc9e-072147d8939c', () => {
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

    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });
  })
});

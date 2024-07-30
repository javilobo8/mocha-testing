
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a9800dec-594f-4594-989b-b16fa7c39ec3', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });
  })
});

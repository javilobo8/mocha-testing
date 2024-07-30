
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ab4d8044-740b-4d08-8b5e-00afd837fe8a', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });
  })
});

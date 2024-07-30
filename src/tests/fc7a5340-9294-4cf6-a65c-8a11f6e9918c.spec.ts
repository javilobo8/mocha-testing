
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - fc7a5340-9294-4cf6-a65c-8a11f6e9918c', () => {
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

    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });
  })
});

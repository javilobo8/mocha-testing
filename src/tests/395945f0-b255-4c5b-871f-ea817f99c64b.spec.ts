
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 395945f0-b255-4c5b-871f-ea817f99c64b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });
  })
});

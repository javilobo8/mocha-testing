
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b28ac78b-2f2d-4114-9107-87f9a851d579', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });
  })
});

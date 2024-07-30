
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 94e7559c-7ad7-4f3d-acf9-93907b6d9bc4', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });
  })
});

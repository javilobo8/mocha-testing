
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 632084f7-13f0-4e92-85d9-f7c10e159cfb', () => {
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

    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });
  })
});

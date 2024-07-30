
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - daaf0b6d-6cfe-46d1-8947-fa05ceab9906', () => {
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

    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });
  })
});

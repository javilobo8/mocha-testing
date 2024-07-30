
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 75eb18e7-5c97-4c06-9b44-d9b63375f282', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });
  })
});

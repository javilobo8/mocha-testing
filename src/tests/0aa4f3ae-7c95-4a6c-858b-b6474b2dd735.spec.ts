
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0aa4f3ae-7c95-4a6c-858b-b6474b2dd735', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 54338fed-6a20-4157-8427-c0345978e7f6', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });
  })
});

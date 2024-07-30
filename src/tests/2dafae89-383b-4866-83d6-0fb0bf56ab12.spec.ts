
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2dafae89-383b-4866-83d6-0fb0bf56ab12', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });
  })
});

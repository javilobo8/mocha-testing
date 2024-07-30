
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 000b4228-06a6-4d63-8410-950abee36d1f', () => {
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

    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 10 ms', async () => {
      await delay(10);
    });
  })
});

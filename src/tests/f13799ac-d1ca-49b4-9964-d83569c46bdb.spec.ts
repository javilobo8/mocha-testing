
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f13799ac-d1ca-49b4-9964-d83569c46bdb', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});

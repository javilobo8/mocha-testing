
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 43b2d474-207c-4e51-b22d-4309dc018457', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });
  })
});

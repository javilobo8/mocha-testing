
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c53b2c15-d92b-491e-a3e1-a568b1aaea3f', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });
  })
});

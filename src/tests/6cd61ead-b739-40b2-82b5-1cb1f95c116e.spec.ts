
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 6cd61ead-b739-40b2-82b5-1cb1f95c116e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 33 ms', async () => {
      await delay(33);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b08b4625-f1b0-4136-82b1-d57de984af57', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 46 ms', async () => {
      await delay(46);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });
  })
});

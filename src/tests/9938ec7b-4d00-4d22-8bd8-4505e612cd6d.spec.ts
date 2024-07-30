
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 9938ec7b-4d00-4d22-8bd8-4505e612cd6d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });
  })
});

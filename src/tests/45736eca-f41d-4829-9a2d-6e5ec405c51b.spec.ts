
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 45736eca-f41d-4829-9a2d-6e5ec405c51b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });
  })
});

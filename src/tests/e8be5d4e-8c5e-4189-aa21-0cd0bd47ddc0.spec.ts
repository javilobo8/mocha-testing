
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e8be5d4e-8c5e-4189-aa21-0cd0bd47ddc0', () => {
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

    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });
  })
});
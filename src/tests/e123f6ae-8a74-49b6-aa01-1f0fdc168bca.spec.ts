
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e123f6ae-8a74-49b6-aa01-1f0fdc168bca', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});

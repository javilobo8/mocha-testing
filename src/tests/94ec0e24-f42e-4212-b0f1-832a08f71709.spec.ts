
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 94ec0e24-f42e-4212-b0f1-832a08f71709', () => {
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

    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 38 ms', async () => {
      await delay(38);
    });
  })
});

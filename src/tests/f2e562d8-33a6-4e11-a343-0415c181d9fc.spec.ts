
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f2e562d8-33a6-4e11-a343-0415c181d9fc', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });
  })
});

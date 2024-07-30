
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - cad4f1e6-b4a9-4e7f-8fb8-76875191248d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });
  })
});

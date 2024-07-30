
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c0738cc6-3959-4a9c-8280-5e1dd951174b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });
  })
});

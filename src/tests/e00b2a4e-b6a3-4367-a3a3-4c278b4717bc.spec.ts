
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e00b2a4e-b6a3-4367-a3a3-4c278b4717bc', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 30 ms', async () => {
      await delay(30);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });
  })
});

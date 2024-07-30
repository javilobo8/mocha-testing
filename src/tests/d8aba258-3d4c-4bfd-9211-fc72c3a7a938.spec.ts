
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d8aba258-3d4c-4bfd-9211-fc72c3a7a938', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });
  })
});

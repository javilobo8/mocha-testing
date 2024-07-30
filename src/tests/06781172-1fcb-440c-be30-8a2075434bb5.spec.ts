
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 06781172-1fcb-440c-be30-8a2075434bb5', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });
  })
});

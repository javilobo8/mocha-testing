
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - cf3053fe-51ec-4cb1-9b3a-a8e5bd032cbd', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 37 ms', async () => {
      await delay(37);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 0819cb46-79ac-4fe4-ba2f-ef16c1f88791', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 4 ms', async () => {
      await delay(4);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 16 ms', async () => {
      await delay(16);
    });
  })
});

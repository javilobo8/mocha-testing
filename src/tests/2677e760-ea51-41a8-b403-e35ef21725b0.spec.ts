
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2677e760-ea51-41a8-b403-e35ef21725b0', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });
  })
});

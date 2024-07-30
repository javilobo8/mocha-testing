
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - fa928735-5aac-4820-a24a-b0273b974c5c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });
  })
});

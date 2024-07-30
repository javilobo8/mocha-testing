
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c3e0a538-8f20-47b8-90c2-9518d41fdef7', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });
  })
});

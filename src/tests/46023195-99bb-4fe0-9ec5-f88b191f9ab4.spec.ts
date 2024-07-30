
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 46023195-99bb-4fe0-9ec5-f88b191f9ab4', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });
  })
});

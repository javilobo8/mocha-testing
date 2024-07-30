
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - deb86de2-9ab8-4f99-83f8-ac779c914f13', () => {
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

    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});

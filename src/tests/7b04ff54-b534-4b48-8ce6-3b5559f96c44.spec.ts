
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7b04ff54-b534-4b48-8ce6-3b5559f96c44', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d1337fd4-f72b-4eeb-89f7-333777629669', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });
  })
});
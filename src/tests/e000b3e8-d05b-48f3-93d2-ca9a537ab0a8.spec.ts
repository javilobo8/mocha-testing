
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e000b3e8-d05b-48f3-93d2-ca9a537ab0a8', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });
  })
});

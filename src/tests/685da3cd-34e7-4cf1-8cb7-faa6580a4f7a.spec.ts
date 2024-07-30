
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 685da3cd-34e7-4cf1-8cb7-faa6580a4f7a', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });
  })
});

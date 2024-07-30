
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f3c2b910-1686-4724-a21f-b6935b84c22a', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});

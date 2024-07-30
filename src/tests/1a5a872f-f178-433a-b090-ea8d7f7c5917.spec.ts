
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1a5a872f-f178-433a-b090-ea8d7f7c5917', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });
  })
});

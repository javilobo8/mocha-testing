
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ddacd5bd-2546-4b1d-981c-40961fd9822f', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - cbfed059-d4a9-4823-ac66-b22d1cba8e09', () => {
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

    it('should delay 6 ms', async () => {
      await delay(6);
    });
  })
});

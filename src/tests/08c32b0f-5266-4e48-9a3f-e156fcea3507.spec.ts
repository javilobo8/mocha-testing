
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 08c32b0f-5266-4e48-9a3f-e156fcea3507', () => {
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

    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });
  })
});

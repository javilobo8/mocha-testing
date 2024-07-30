
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 12dd9700-d695-4fff-b8d5-0ad2ef77ed52', () => {
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

    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });
  })
});

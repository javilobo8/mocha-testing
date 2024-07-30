
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a6765d28-d85a-45aa-84be-f691d4b6372d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 32 ms', async () => {
      await delay(32);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 4 ms', async () => {
      await delay(4);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - aa361eb2-ae35-43ed-98f6-a5a6c6c9edd3', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });
  })
});

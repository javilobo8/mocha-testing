
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 155c644a-d0b9-434b-b1db-9043be42d12a', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 22 ms', async () => {
      await delay(22);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 763c5f83-741c-4e80-bc1b-0c329cf6172e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });
  })
});

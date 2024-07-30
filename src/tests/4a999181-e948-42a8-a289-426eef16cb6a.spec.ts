
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 4a999181-e948-42a8-a289-426eef16cb6a', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });
  })
});

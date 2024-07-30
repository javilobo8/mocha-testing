
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7d79521e-ca66-436c-8158-05ebc0c8b6d2', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 81245210-4a7a-402c-9585-bc3287a36987', () => {
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

    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });
  })
});

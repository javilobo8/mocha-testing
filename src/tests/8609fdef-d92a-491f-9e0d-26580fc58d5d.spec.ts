
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 8609fdef-d92a-491f-9e0d-26580fc58d5d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 14768da3-a098-42eb-a4d3-8ab5aa20372b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });
  })
});

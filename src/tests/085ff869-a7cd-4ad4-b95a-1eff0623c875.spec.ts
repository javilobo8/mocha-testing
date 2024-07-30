
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 085ff869-a7cd-4ad4-b95a-1eff0623c875', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 40 ms', async () => {
      await delay(40);
    });
  })
});
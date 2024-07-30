
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2a8c05fd-dee7-47c4-811e-aa7d5189e85f', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 27 ms', async () => {
      await delay(27);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a8af5689-192a-410f-b732-ca56c7558799', () => {
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

    it('should delay 35 ms', async () => {
      await delay(35);
    });
  })
});

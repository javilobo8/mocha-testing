
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1e4eb2f4-da52-427e-84ae-015fce613b9b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });
  })
});
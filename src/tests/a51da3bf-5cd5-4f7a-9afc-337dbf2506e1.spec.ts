
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a51da3bf-5cd5-4f7a-9afc-337dbf2506e1', () => {
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

    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });
  })
});

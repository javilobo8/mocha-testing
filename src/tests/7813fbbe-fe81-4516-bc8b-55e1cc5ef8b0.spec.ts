
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7813fbbe-fe81-4516-bc8b-55e1cc5ef8b0', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });
  })
});

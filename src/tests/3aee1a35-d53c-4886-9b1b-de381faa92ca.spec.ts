
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 3aee1a35-d53c-4886-9b1b-de381faa92ca', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 31 ms', async () => {
      await delay(31);
    });
  })
});

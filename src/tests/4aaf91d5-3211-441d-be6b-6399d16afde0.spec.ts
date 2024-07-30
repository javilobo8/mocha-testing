
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 4aaf91d5-3211-441d-be6b-6399d16afde0', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});

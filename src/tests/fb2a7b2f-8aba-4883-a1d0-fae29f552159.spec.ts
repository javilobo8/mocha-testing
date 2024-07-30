
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - fb2a7b2f-8aba-4883-a1d0-fae29f552159', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 38 ms', async () => {
      await delay(38);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });
  })
});

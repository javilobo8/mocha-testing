
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d3a09f7b-a573-417e-a301-ce66bb9f3bf9', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });
  })
});

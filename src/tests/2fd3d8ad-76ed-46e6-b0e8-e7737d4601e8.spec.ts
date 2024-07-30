
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 2fd3d8ad-76ed-46e6-b0e8-e7737d4601e8', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 48 ms', async () => {
      await delay(48);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 33 ms', async () => {
      await delay(33);
    });
  })
});

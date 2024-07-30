
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b448907d-2ccb-439b-8f60-0ab4066f0f01', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 0 ms', async () => {
      await delay(0);
    });
  })
});

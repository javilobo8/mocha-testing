
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1ebcfe2b-f044-445e-b541-4a1a1c787576', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 13 ms', async () => {
      await delay(13);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });
  })
});

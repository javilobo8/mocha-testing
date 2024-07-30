
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 87377f01-820d-4561-8be4-c394b64b8c2b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});

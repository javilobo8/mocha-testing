
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 24beb07e-884b-43f7-9010-5233d354fc6d', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 26 ms', async () => {
      await delay(26);
    });

    it('should delay 8 ms', async () => {
      await delay(8);
    });

    it('should delay 25 ms', async () => {
      await delay(25);
    });
  })
});

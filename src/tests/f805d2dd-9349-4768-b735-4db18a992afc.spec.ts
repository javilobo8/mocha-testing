
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f805d2dd-9349-4768-b735-4db18a992afc', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 47 ms', async () => {
      await delay(47);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });
  })
});

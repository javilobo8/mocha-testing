
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - a9931d8b-f5a3-4138-b380-1743452ac464', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });
  })
});

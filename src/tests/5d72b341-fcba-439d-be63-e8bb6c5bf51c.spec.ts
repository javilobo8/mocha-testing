
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5d72b341-fcba-439d-be63-e8bb6c5bf51c', () => {
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

    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 41 ms', async () => {
      await delay(41);
    });
  })
});

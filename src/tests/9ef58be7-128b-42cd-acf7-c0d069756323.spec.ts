
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 9ef58be7-128b-42cd-acf7-c0d069756323', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 40 ms', async () => {
      await delay(40);
    });

    it('should delay 7 ms', async () => {
      await delay(7);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });
  })
});

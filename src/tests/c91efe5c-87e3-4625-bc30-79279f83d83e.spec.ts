
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c91efe5c-87e3-4625-bc30-79279f83d83e', () => {
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

    it('should delay 0 ms', async () => {
      await delay(0);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });
  })
});

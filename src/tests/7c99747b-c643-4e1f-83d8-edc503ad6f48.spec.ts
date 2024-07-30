
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 7c99747b-c643-4e1f-83d8-edc503ad6f48', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });
  })
});

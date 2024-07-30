
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 53ba7ab9-6f4c-489e-9990-769b598fb8c3', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 23 ms', async () => {
      await delay(23);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - e771e034-82f7-4698-ae2a-f3243b30609b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 9 ms', async () => {
      await delay(9);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });
  })
});

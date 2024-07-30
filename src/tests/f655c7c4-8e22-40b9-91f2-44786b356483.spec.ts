
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f655c7c4-8e22-40b9-91f2-44786b356483', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });
  })
});

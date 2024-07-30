
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f884a191-bf69-4da7-96fe-a15f3d379f45', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 5 ms', async () => {
      await delay(5);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });
  })
});

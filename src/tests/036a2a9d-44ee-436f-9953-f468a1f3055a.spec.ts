
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 036a2a9d-44ee-436f-9953-f468a1f3055a', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });
  })
});

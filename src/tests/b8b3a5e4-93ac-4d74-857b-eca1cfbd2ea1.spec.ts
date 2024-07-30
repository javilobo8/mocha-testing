
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - b8b3a5e4-93ac-4d74-857b-eca1cfbd2ea1', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });
  })
});

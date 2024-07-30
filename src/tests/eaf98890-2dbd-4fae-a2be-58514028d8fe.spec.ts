
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - eaf98890-2dbd-4fae-a2be-58514028d8fe', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });
  })
});

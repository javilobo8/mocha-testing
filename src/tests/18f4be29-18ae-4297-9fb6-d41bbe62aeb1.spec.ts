
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 18f4be29-18ae-4297-9fb6-d41bbe62aeb1', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 28 ms', async () => {
      await delay(28);
    });
  })
});

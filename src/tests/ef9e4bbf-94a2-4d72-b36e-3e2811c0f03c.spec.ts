
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ef9e4bbf-94a2-4d72-b36e-3e2811c0f03c', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });
  })
});

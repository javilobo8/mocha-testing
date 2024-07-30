
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d2e13d2a-ce6a-410d-a43e-ebf550f17823', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 39 ms', async () => {
      await delay(39);
    });
  })
});

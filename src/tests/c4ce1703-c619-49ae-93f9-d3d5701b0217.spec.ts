
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - c4ce1703-c619-49ae-93f9-d3d5701b0217', () => {
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

    it('should delay 36 ms', async () => {
      await delay(36);
    });

    it('should delay 21 ms', async () => {
      await delay(21);
    });
  })
});

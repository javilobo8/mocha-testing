
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 42c5091e-51e6-4944-829f-e35d6e0dc1f5', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });
  })
});

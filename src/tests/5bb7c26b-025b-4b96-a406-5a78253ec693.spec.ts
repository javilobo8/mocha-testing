
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 5bb7c26b-025b-4b96-a406-5a78253ec693', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 12 ms', async () => {
      await delay(12);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });
  })
});

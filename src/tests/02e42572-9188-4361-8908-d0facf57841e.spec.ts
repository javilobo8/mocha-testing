
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 02e42572-9188-4361-8908-d0facf57841e', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });
  })
});

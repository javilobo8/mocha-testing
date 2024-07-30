
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d355e227-9706-4975-b315-750843562a48', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 47 ms', async () => {
      await delay(47);
    });
  })
});

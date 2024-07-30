
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d575b5d9-35f5-4aad-a329-9c5e7ef1ce76', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 11 ms', async () => {
      await delay(11);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 48 ms', async () => {
      await delay(48);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 772a10e9-d514-4ce2-a679-42d265295b57', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 50 ms', async () => {
      await delay(50);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });
  })
});

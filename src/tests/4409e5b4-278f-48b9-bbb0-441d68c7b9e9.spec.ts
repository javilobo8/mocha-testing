
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 4409e5b4-278f-48b9-bbb0-441d68c7b9e9', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 6 ms', async () => {
      await delay(6);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - f8f88093-a21f-49c5-bf94-274c8e42a592', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 42 ms', async () => {
      await delay(42);
    });

    it('should delay 43 ms', async () => {
      await delay(43);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });
  })
});

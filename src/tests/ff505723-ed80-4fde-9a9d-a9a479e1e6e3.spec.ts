
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - ff505723-ed80-4fde-9a9d-a9a479e1e6e3', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 49 ms', async () => {
      await delay(49);
    });

    it('should delay 2 ms', async () => {
      await delay(2);
    });

    it('should delay 14 ms', async () => {
      await delay(14);
    });
  })
});

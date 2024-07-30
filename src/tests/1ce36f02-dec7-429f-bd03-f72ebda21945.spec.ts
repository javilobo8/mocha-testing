
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 1ce36f02-dec7-429f-bd03-f72ebda21945', () => {
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

    it('should delay 14 ms', async () => {
      await delay(14);
    });

    it('should delay 20 ms', async () => {
      await delay(20);
    });
  })
});

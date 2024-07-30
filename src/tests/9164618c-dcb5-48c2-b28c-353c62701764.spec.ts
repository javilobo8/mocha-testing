
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 9164618c-dcb5-48c2-b28c-353c62701764', () => {
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

    it('should delay 15 ms', async () => {
      await delay(15);
    });

    it('should delay 1 ms', async () => {
      await delay(1);
    });
  })
});

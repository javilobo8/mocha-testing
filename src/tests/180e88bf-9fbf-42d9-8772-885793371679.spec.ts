
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 180e88bf-9fbf-42d9-8772-885793371679', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 16 ms', async () => {
      await delay(16);
    });

    it('should delay 35 ms', async () => {
      await delay(35);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });
  })
});

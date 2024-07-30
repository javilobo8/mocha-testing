
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 4e9658b8-169d-48fa-91ac-cb31f6e3741b', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 3 ms', async () => {
      await delay(3);
    });

    it('should delay 45 ms', async () => {
      await delay(45);
    });

    it('should delay 19 ms', async () => {
      await delay(19);
    });
  })
});

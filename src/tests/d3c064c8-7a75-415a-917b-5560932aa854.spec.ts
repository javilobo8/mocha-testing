
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - d3c064c8-7a75-415a-917b-5560932aa854', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 34 ms', async () => {
      await delay(34);
    });

    it('should delay 29 ms', async () => {
      await delay(29);
    });

    it('should delay 24 ms', async () => {
      await delay(24);
    });
  })
});

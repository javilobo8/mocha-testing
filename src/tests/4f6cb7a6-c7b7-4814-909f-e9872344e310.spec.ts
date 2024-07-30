
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 4f6cb7a6-c7b7-4814-909f-e9872344e310', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 44 ms', async () => {
      await delay(44);
    });

    it('should delay 27 ms', async () => {
      await delay(27);
    });
  })
});


import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 04856314-9945-476a-b450-e5efdec3ee50', () => {
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

    it('should delay 1 ms', async () => {
      await delay(1);
    });

    it('should delay 18 ms', async () => {
      await delay(18);
    });
  })
});

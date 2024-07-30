
import { expect } from 'chai';

import { add, delay } from '../calculator.js';

describe('Calculator - 9b88a316-beec-4ca3-a06a-b05a3fdb26fd', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(add(1, 1)).to.be.equal(2);
    });

    it('should add two decimal numbers', () => {
      expect(add(1.20, 1.30)).to.be.equal(2.5);
    });
  })

  describe('delay', () => {
    it('should delay 18 ms', async () => {
      await delay(18);
    });

    it('should delay 17 ms', async () => {
      await delay(17);
    });

    it('should delay 22 ms', async () => {
      await delay(22);
    });
  })
});

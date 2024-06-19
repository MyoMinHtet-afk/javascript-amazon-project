import { formatCurrency } from "../scripts/utils/money.js";

describe('test suite:Format Currency',() => {
  it ('converts cents into dollors', () =>{
    expect(formatCurrency(2065)).toEqual('20.65');
  });

  it('works with 0',() => {
     expect(formatCurrency(0)).toEqual('0.00');
  });

  it ('rounds up to the nearest cents', () => {
      expect(formatCurrency(2000.5)).toEqual('20.01');
  });

});
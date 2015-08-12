'use strict';

import PieceExpander from '../piece-expander';

describe('PieceExpander View', () =>

  beforeEach(() => {
    this.pieceExpander = new PieceExpander();
  })

  it('Should run a few assertions', () => {
    expect(this.pieceExpander).toBeDefined();
  });

});

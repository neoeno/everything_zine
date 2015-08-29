'use strict';

import PiecePreview from '../piece-preview';

describe('PiecePreview View', () =>

  beforeEach(() => {
    this.piecePreview = new PiecePreview();
  });

  it('Should run a few assertions', () => {
    expect(this.piecePreview).toBeDefined();
  });

});

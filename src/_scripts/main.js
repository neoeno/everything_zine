// Main javascript entry point
// Should handle bootstrapping/starting application

import $ from 'jquery'
import PiecePreview from '../_modules/piece-preview/piece-preview'
import PieceExpander from '../_modules/piece-expander/piece-expander'

$(() => {
  new PiecePreview(document)
  // new PieceExpander(document)
})

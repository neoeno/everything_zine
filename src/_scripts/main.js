// Main javascript entry point
// Should handle bootstrapping/starting application

import $ from 'jquery'
import PiecePreview from '../_modules/piece-preview/piece-preview'

$(() => {
  new PiecePreview(document)
})

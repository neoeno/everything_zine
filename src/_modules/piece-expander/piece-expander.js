import $ from 'jquery'

export default class PieceExpander {
  constructor(_document) {
    this.$doc = $(_document)
    this.$reader = this.$doc.find('[data-reader]')
    this.bindToEvents()
  }
  bindToEvents() {
    this.$doc.on('click', '[data-piece]', this.handlePieceClick.bind(this))
  }
  handlePieceClick(e) {
    let $pieceClicked = $(e.target).is('[data-piece]') ? $(e.target) : $(e.target).parents('[data-piece]')

    if ($pieceClicked.is('.piece-view')) {
      this.resetView()
    } else {
      this.resetView()
      this.expandPiece($pieceClicked)
    }
  }
  expandPiece($piece) {
    this.$reader.html($piece.html())
  }
  resetView() {
    this.$doc.find('.piece-view').each((_, piece) => {
      let $piece = $(piece)
      $piece.removeClass('piece-view')
      $piece.addClass('piece-preview')
    })
  }
}

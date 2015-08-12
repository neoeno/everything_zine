import $ from 'jquery'

export default class PieceExpander {
  constructor(_document) {
    this.$doc = $(_document)
    // this.bindToEvents()
    this.splitWords()
  }
  bindToEvents() {
    this.$doc.on('click', '[data-piece]', this.handlePieceClick.bind(this))
  }
  splitWords() {
    this.$doc.find('[data-piece] p:not(.lines), [data-piece] .line').each((_, paragraph) => {
      let $paragraph = $(paragraph)
      $paragraph.html($paragraph.text().split(' ').map((word) => {
        return '<span class="wd">' + word + '</span>'
      }).join(' '))
    })
  }
  handlePieceClick(e) {
    let $pieceClicked = $(e.target).is('[data-piece]') ? $(e.target) : $(e.target).parents('[data-piece]')

    if ($pieceClicked.is('.piece--expanded')) {
      this.resetView()
    } else {
      this.resetView()
      this.expandPiece($pieceClicked)
    }
  }
  expandPiece($piece) {
    $piece.addClass('piece--expanded')
  }
  resetView() {
    this.$doc.find('.piece--expanded').each((_, piece) => {
      let $piece = $(piece)
      $piece.removeClass('piece--expanded')
    })
  }
}

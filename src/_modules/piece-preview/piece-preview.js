import $ from 'jquery'

export default class PiecePreview {
  constructor(_document) {
    this.$doc = $(_document)
    this.splitWords()
  }
  splitWords() {
    this.$doc.find('.piece-preview p:not(.lines), .piece-preview .line').each((_, paragraph) => {
      let $paragraph = $(paragraph)
      $paragraph.html($paragraph.text().split(' ').map((word) => {
        return '<span class="wd">' + word + '</span>'
      }).join(' '))
    })
  }
}

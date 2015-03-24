function convertDocument() {
  var documentName = DocumentApp.getActiveDocument().getName()
  var documentBody = DocumentApp.getActiveDocument().getBody().copy()

  formatLists(documentBody)
  formatHeaders(documentBody)

  formatDashes(documentBody)
  formatQuotes(documentBody)

  DriveApp.createFile(formatName(documentName), documentBody.getText())
}

function formatLists(documentBody) {
  documentBody.getListItems().forEach(function(listItem) {
    listItem.setText(formatListItem(listItem))
  })
}

function formatListItem(listItem) {
  return Utilities.formatString("\\item %s", listItem.getText())
}

function formatHeaders(documentBody) {
  documentBody.getParagraphs().forEach(function(paragraph) {
    if (isHeader(paragraph)) {
      paragraph.setText(formatHeader(paragraph))
    }
  })
}

function isHeader(paragraph) {
  return paragraph.getHeading() != DocumentApp.ParagraphHeading.NORMAL
}

function formatHeader(header) {
  switch (header.getHeading()) {
      case DocumentApp.ParagraphHeading.HEADING1:
        return Utilities.formatString("\\section{%s}", header.getText())

      case DocumentApp.ParagraphHeading.HEADING2:
        return Utilities.formatString("\\subsection{%s}", header.getText())

      case DocumentApp.ParagraphHeading.HEADING3:
        return Utilities.formatString("\\subsubsection{%s}", header.getText())

      case DocumentApp.ParagraphHeading.HEADING4:
        return Utilities.formatString("\\paragraph{%s}", header.getText())

      case DocumentApp.ParagraphHeading.HEADING5:
        return Utilities.formatString("\\subparagraph{%s}", header.getText())

      default:
        return null
    }
}

function formatDashes(documentBody) {
  documentBody.replaceText(" —", "~---")
}

function formatQuotes(documentBody) {
  documentBody.replaceText("«", "<<")
  documentBody.replaceText("»", ">>")
}

function formatName(documentName) {
  return Utilities.formatString("%s.tex", documentName)
}

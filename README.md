# Google Doc → TeX

Dead simple Google Doc to TeX converter.

Can do these things.

* Headers → `\section`, `\subsection`, `\subsubsection`, `\paragraph` and `\subparagraph`.
* List items → `\item`.
* `—` → `~---`.
* `« »` → `<< >>`.
* `%` → `\%`.

That’s all folks!

Other things are limited via Drive API. Two potential areas
for expansion are tables and images.

## Run

Open a document you want to convert.

1. Tools → Script Editor → Blank Project.
2. Copy `converter.js` contents, paste into the project.
3. File → Save.
4. Run → `convertDocument`.

The converted document will be saved at the Drive’s root directory.

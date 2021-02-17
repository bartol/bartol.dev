% latex

## insert pdf

preamble:

	\usepackage{pdfpages}

document:

	\includepdf{<file>}

## centered image

preamble:

	\usepackage{graphicx}

document:

	\begin{center}
	\centering
	\includegraphics[width=\textwidth]{<path>}
	\captionof{figure}{<caption>}
	\end{center}

## page break

	\newpage

## bold

	\textbf{<text>}

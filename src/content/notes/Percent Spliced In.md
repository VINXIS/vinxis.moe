---
isObsidianImport: false
created: "1745200395572"
lastModified: "1745200395572"
tags:
  - biology
  - research
  - transcriptomics
---
Percent Spliced In (PSI, $\Psi$) is a percentage value (0.0-1.0) of the amount of instances that the [[Exons]] appear in the resulting mRNA instead of spliced out due to [[Alternative Splicing]]. It's usually calculated as:
$$
\Psi = \frac{\frac{I}{l_I}}{\frac{I}{l_I}+\frac{S}{l_S}}
$$

Where:
- $I$ = counts where the target Exon is included
- $S$ =  counts where the target Exon is excluded 
- $l_I$ and $l_S$ are the effective length calculations of the inclusion and exclusion of the exon respectively
There's slight difference between the various types of [[Alternative Splicing]], but generally follows the same formula structure.


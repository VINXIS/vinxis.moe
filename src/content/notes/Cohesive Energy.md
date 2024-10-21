---
isObsidianImport: true
created: Mon Jan 10 2022 09:17:24 GMT-0700 (Mountain Standard Time)
lastModified: Mon Jan 10 2022 10:02:43 GMT-0700 (Mountain Standard Time)
---
Cohesive energy is directly tied to the heat of [[Sublimation]] and [[Vaporization]] and is directly tied to better engineering properties such as more strength and more stability.

|                  | Larger Cohesive Energy | Smaller Cohesive Energy |
| ---------------- | ---------------------- | ----------------------- |
| Sublimation Temp | High                   | Low                     |
| Melting Temp     | High                   | Low                     | 
| Strength         | Strong                 | Weak                    |
| Stable           | Unstable               | Stable                  |

The cohesive energy can be calculated using the [[Nearest-Neighbour Approximation]] for easier calculations where only adjacent neighbour bonds are of concern such as compression/tension with [[Young's Modulus]] for ex:
$$U_{\text{total}}=\frac{1}{2}zN\epsilon_b$$

The total energy for a general system consisting of a crystal is
$$
\begin{aligned}
	U_{\text{total}} &= \frac{1}{2}N(4\epsilon_b)\sum^N_{i\neq j}\left[ \left( \frac{\sigma}{P_{ij}r_0} \right)^{12} - \left( \frac{\sigma}{P_{ij}r_0} \right)^{6} \right] \\ 
	
	&= 2N\epsilon_b\left[ \left( \sum^N_{i\neq j} \frac{1}{P_{ij}^{12}} \right)\left( \frac{\sigma}{r_0} \right)^{12} - \left( \sum^N_{i\neq j}\frac{1}{P_{ij}^{6}} \right)\left( \frac{\sigma}{r_0} \right)^{6} \right]
\end{aligned}	
$$

Where $r_0$ is the general distance between the nearest neighbours, and $P_{ij}r_0$ is the general distance between atoms $i$ and $j$.

The values for $\sum^N_{i\neq j}\frac{1}{P_{ij}^{6}}$ and $\sum^N_{i\neq j}\frac{1}{P_{ij}^{12}}$ are sometimes also given for each crystal structure.
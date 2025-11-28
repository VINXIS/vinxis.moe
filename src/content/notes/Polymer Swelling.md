---
isObsidianImport: false
created: "1763669436394"
lastModified: "1764308897182"
tags:
  - polymers
  - materials
  - mechanics
---
Polymer swelling is the process in which a [[Polymer]] is exposed to a solvent, and absorbed into the [[Polymer Network]], functionally mixing the 2 into a lattice, and effectively increasing the polymer's volume. Basically the solvent goes into the empty space that is left within the network of tangled strands

It functions generally off of 3 assumptions[^1]:
1. The change in free energy $\Delta G$ can be represented by sum of the components:
	- Mixing of the polymer + solvent
	- The elastic deformation of the polymer strands in the network.
	- Therefore: $\Delta G = \Delta G_{mix} + \Delta G_{el}$
2. The mixing can be described by the [[Flory-Huggins Theory]] $\Delta G_{mix}$
	- **Promotes** swelling
	- [[Entropy]] increases with a more complex final lattice by mixing the solvent and polymer
3. The deformation can be described by the [[Affine Network Model]] $\Delta G_{el}$
	- **Resists** swelling
	- [[Entropy]] decreases as the polymer strands become "untangled" by stretching

These 3 assumptions together form the **[[Flory-Rehner Theory]]** to describe swelling.

Due to the competing influences of mixing and deformation, an equilibrium is generally reached at "saturation", which can be described using a **Swelling ratio $Q$:**[^1][^2] 
$$ Q \equiv \frac{V_{swell}}{V_{dry}} \cong \frac{V_p + V_s}{V_p}\cong \frac{V_{swell}}{V_r}$$
Where:
- $V_{swell}$ is the volume of the swollen polymer at equilibrium
- $V_{dry}$ and $V_r$ are the volume of the polymer with no solvent. Considered as "dry" or "relaxed"
- $V_p$ is the volume of the polymer itself (excl. the air within the [[Polymer Network]])
- $V_s$ is the volume of the solvent that was added to the polymer

The most commonly used case for this is with [[Hydrogel]]s; however, it's been used for a bunch of other random shit too like modelling steak cooking[^3] lol 

[^1]: https://doi.org/10.1007/978-94-009-1343-1_27

[^2]: https://hydrogeldesign.org/swelling/

[^3]: https://doi.org/10.1140/epjp/s13360-020-00311-0

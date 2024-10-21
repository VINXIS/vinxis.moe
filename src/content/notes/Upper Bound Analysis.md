---
isObsidianImport: true
created: Wed Apr 13 2022 10:58:00 GMT-0600 (Mountain Daylight Saving Time)
lastModified: Wed Apr 13 2022 11:13:00 GMT-0600 (Mountain Daylight Saving Time)
---
Upper Bound Analysis is a method of analyzing the effects of deformation on a material. It is safer to use an upper bound analysis via overestimating than a lower bound analysis via underestimating

Since internal [[stress]] and [[strain]] can't be calculated an approximation method is required. Upper bound analysis uses assumptions based on energy consumption rates and velocities of shear directions

When a plane-strain indentation occurs, it's assumed velocities of shear at different directions are equivalent in equilateral triangles. Therefore, the resulting energy consumption rate comes out to:
$$\frac{dW}{dt}=k\sum^n_{i=0} L_iV_i$$
For each affected shear direction with a given [[shear stress]] $k$. When multiple shear stresses are used, then
$$\frac{dW}{dt}=\sum^{n_k}_{i=0}\left(k_i\sum^{n_l}_{j=0} L_jV_j\right)$$
Where $n_k$ is the number of shear stresses, and $n_l$ is the number of shear directions affected by [[shear stress]] $k_i$

Multiple shear stresses can be observed in cases where lubrication is used, altering the [[shear stress]] at certain directions.


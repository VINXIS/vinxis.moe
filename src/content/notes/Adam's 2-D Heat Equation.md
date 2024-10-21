---
isObsidianImport: true
created: Wed Apr 13 2022 12:51:44 GMT-0600 (Mountain Daylight Saving Time)
lastModified: Wed Apr 13 2022 12:56:37 GMT-0600 (Mountain Daylight Saving Time)
---
Adam's 2-D Heat Equation provides the ability to calculate the temperature at a point in the weld pool depending on certain factors. The relationship is as follows:
$$T_p=\frac{1}{\frac{4.13VYg\rho C}{Q} + \frac{1}{T_m - T_0}} + T_0$$
- $g$ is thickness
- $V$ is welding velocity
- $Y$ is desired distance from fusion boundary we want the temperature from
- $\rho C$ is the volume thermal capacity of the material
- $T_m$ is the melting temperature
- $T_0$ is the standard temperature 298K
- $Q$ is the power provided 
To calculate $Q$, the welding effeciency $n$, voltage $E$, and current $I$ is required to achieve the following:
$$Q=EIn$$

This is useful when the assumptions for [[Rosenthal Heat Flow]] can not be applied.
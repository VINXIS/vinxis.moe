---
isObsidianImport: true
created: Wed Apr 13 2022 02:59:22 GMT-0600 (Mountain Daylight Saving Time)
lastModified: Wed Apr 13 2022 04:04:53 GMT-0600 (Mountain Daylight Saving Time)
---
Injection Molding is a type of [[casting]] where the material/melt is injected into the mold at high pressure, and is ideal to produce high quantities/mass production of objects.

This typically focuses on thermoplastic polymers/plastics, for metals, [[Die Casting]] is used. Epoxy can also be used for thermosetting polymers/plastics as well.

The process mainly contains of 3 stages
1. Injection
2. Cooling
3. Mold Reset

In the injection stage, typically a polymer is sent through heating to the nozzle, which injects the melt into the mold. The pressure inside the mold rapidly increases in this process as the melting and injecting is quick.

In the cooling stage a slow flow rate of the melt is added into the mold to mitigate shrinkage (which can occur from solidification of the melt), slowly decreasing the pressure a bit more before stopping and removing the nozzle, and sealing the mold. After the stopping and sealing, the pressure drops much faster, and the mold cools and solidifies faster. This is typically the longest due to the thermal conductivity of polymers.

In the mold reset stage, the mold is opened and the polymer is removed, preparing the machine for the next cast, and most if not all pressure cased by the mold is immediately removed.

![[Injection Molding Pressure vs Time Curve.png]]

The total cooling time is typically defined by the following relationship **for cooling rates higher than 3 seconds**:
$$t_c=\frac{h_\text{max}^2}{\pi^2\alpha}\ln{\frac{4(T_i-T_m)}{\pi(T_x-T_m)}} \ t_c > 3\text{s}$$
- $t_c$ is cooling time
- $h_\text{max}$ is maximum wall thickness for the injection mold
- $T_x$ is the temperature of the cast at ejection
- $T_m$ is the temperature of the mold
- $T_i$ is the temperature of the melt when injected

This is under the assumption that heating/cooling is only through conduction, and the initial polymer temperature is constant through the melt

The time until sealing can be calculated with $\frac{1}{2}h_\text{max}$

This can also be shortened to the following:
$$t_c=\frac{\left(\frac{h_\text{max}}{2}\right)^2}{\alpha}$$
for materials like high-density polyethylene polymers.
---
isObsidianImport: true
created: Wed Jan 05 2022 09:33:46 GMT-0700 (Mountain Standard Time)
lastModified: Thu Apr 21 2022 00:12:07 GMT-0600 (Mountain Daylight Saving Time)
---
The atomic interaction: $\phi(r)$ described the bond strength relative to the distance between atoms for [[Chemical Bonds]] and [[Van der Waals]]

![[General atomic interaction diagram.png]]

When they are super far, there is little to no interaction.
When they are relatively close, it will be close to the equilibrium.
	The equilibrium energy and distance are considered $E=\epsilon_b$ and $r=r_e$ also known as [[Bond Energy]]
When they are too close, there is repulsion.

**If they are not super far, then the end state for atoms will be equilibrium distance $r_e$**. 

![[Atomic interaction diagram.png]]

At $r_d$ the bond completely breaks.

For **one element**, the atomic interaction energy level is described by the following theoretical relationship:
$$\phi(r) = \epsilon_b\left[\left(\frac{r_e}{r}\right)^{12} - 2\left(\frac{r_e}{r}\right)^6\right]$$
Which is known as the [[Lennard-Jones Potential]]


For **two+ elements**, the equilibrium distance and [[Bond Energy]] are averaged with summation and geometric means respectively:
$$r_e = \frac{1}{n}\sum_{i=0}^n{r_{e(i)}}$$
$$\epsilon_b = \left(\prod^n_{i=0}{r_{e(i)}}\right)^{\frac{1}{n}}$$

Atomic bonds can also be viewed as a spring, where 
$$r=r_e$$ and $$F=\frac{d\phi (r)}{dr}=K(r-r_e)=K\Delta r$$
The spring constant $K$ for the bond force can be obtained from the derivative of force and distance at $r_e$ where force is 0, so:
$$K=\frac{dF}{dr} = 
\frac{d^2\phi}{dr^2}= \frac{72\epsilon_b}{r_e^2}
$$

The force reaches its maximum at the inflection point $r_d$ so 
$$
\frac{dF}{dr} = 
\frac{d^2\phi}{dr^2}=
\left\{ \frac{12\epsilon_b}{r_e}\left(\frac{r_e}{r}\right)^8\left[13\left(\frac{r_e}{r}\right)^6 - 7\right] \right\}$$
equals 0 when $r=r_d$ . Theoretically as a result, $r_d = 1.11r_e$, but the bonds become unstable or broken before 11% strain, and instead get broken at 0.2% strain due to plastic deformation

As a result, the Energy for [[Elasticity]] will be much lower than the Heat of [[Sublimation]].

$r_e$ of an atom corresponds to a higher potential energy value when temperature increases in a [[Thermal Expansion]] situation, changing $\phi(r_e)$ to $\phi(r)$ with the following [[Taylor Series]] relationship:
$$\phi(r)=\sum^\infty_{n=0}\frac{\phi^{(n)}(r_e)}{n!}(r-r_e)^n$$



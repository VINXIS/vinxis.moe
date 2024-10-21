---
isObsidianImport: true
created: Mon Jan 03 2022 23:36:56 GMT-0700 (Mountain Standard Time)
lastModified: Tue Mar 12 2024 20:52:15 GMT-0600 (Mountain Daylight Saving Time)
---
# MAT E 336 | Phase Transformation II | Interfaces in Materials
**Winter 2022** #Class

---

## Main Block
### Time
| Block        | Days | Time           | Location    |
| ------------ | ---- | -------------- | ----------- |
| Lectures     | MWF  | 9:00 - 9:50 am | MEC 4-1     |
| Office Hours | R    | 2:00 - 3:00 pm | Online      |
| Seminar      | M    | 2:00 - 2:50 pm | ETLC E1-008 | 

### Rubric
| Activity | Weight |
| -------- | ------ |
| Homework | 25%    |
| Midterm  | 30%    |
| Final    | 45%    | 

### Outline
1. Introduction - Materials Analysis via Atomic Interactions
	- Chapter 1 - Atomic Bonding and its Correlation with Material Properties
	- Chapter 2 - Quasi-Chemical Model of Material Systems
2. Vapor-Solid Interface and Phase Transformation
	- Chapter 3 - Vapor-Solid Interface
	- Chapter 4 - Vapor-Solid Phase Transformation
3. Liquid-Solid Interface and Phase Transformation
	- Chapter 5 - Liquid-Solid Interface and Solidification

### Due Dates

---

## Introduction
Vapor - Solid Transformations:
- [[Vapor Deposition]] creates different solid structures from metal vapor. **PT. 2 | CH. 3 + 4**

Liquid - Solid Transformations:
- [[Solidification]] creating different solid structures from liquids **PT. 3 | CH. 5**

## Chapter 1 - Atomic Bonding and its Correlation with Material Properties
[[Chemical Bonds]] are the main dictators on what material properties will exist.

[[Van der Waals]] are considered secondary bonds. They connect molecules but are not as strong.

The strength of these bonds are dictated by [[Atomic Interaction]] strength, and the [[Bond Energy]] can be found as a result.

To determine the energy required for [[Sublimation]], you can use the [[Bond Energy]], as they are directly related.

Using a [[Nearest-Neighbour Approximation]] is much simpler to calculate but it is not good for simulating long-range [[Atomic Interaction]]s which is required for calculating material properties.

For a better means of calculating [[Cohesive Energy]], it is better to further expand the [[Lennard-Jones Potential]] instead of using the [[Nearest-Neighbour Approximation]].

[[Atomic Interaction]]s can also be modelled as a form of a spring

The [[Thermal Expansion]] of materials can also be described by [[Atomic Interaction]]s

# Final Study
## Ch 1
The [[Lennard-Jones Potential]] has a repulsive interaction and a positive interaction. The repulsive interaction is inversely proportional to the bond distance $r$ by the power of -12, Attraction by the power of -6.

When increasing the attraction factor and keeping the repulsion factor fixed, the [[bond energy]] $\epsilon_b$ increases, while the bond distance $r$ decreases. Likewise for fixed attraction and decreased repulsion. Vice Versa for the other 2 circumstances

For a question regarding finding the [[Young's Modulus]]:
1. Obtain the interatomic potential formula, if none then use [[Lennard-Jones Potential]]
2. Obtain bond distance $\phi(r)'=0$ and spring constant $\phi(r)''=0$
3. Obtain model for [[Stress]]
	1. Obtain crystal structure type and direction
	2. Obtain number of bonds and bond angles in direction of crystal structure type
	3. Obtain relationship between bond length in direction and lattice parameter
4. Equate [[Stress]] to [[Young's Modulus]] * [[Strain]]

A bulk solid of the same material will have far more tightly packed atoms than a small cluster will, 
Cluster's [[Young's Modulus]] < Bulk Solid's [[Young's Modulus]]

The [[Thermal Expansion]] coeff is inversely proportional to the [[Young's Modulus]], so higher $Y$ will cause lower $\alpha_L$.

[[ Lattice Vibration]] can influence many mechanical, electrical, chemical, e.t.c. properties for a material, and is described by the [[Einstein Frequency]] and [[Einstein Temperature]].

|                          | Higher Bond Energy |
| ------------------------ | ------------------ |
| Corrosion Rate           | Lower              |
| Thermal Expansion        | Lower              |
| Conductivity             | Lower              |
| Heat Capacity            | Lower              |
| Lattice Vibration        | Higher             |
| Speed of Sound           | Higher             |
| Corrosion Resistance     | Higher             |
| Cohesive Energy          | Higher             |
| Sublimation/Vaporization | Higher             |
| Density                  | Higher             |
| Melting Temperature      | Higher             |
| Young's Modulus          | Higher             |
| Bulk vs Cluster          | Higher Chance Bulk |
| Surface Energy           | Higher             |

When looking for the [[Einstein Frequency]] of a material given the [[Atomic Interaction]] potential, translate it to the [[Lennard-Jones Potential]] and derive twice to get the spring constant, then use the relationship of [[Lattice Vibration]] frequency and [[Einstein Frequency]] to get the multiplier for [[Einstein Frequency]], and calculate the freq.

[[Atomic Interaction]]s can occur for alloy materials as well with 2+ different elements notated as $\epsilon_{AA}$ $\epsilon_{BB}$ $\epsilon_{AB}$  e.t.c. These are obtained from a relationship with the [[Gibbs Free Energy]] of the alloy. 

## Ch 2

The [[Gibbs Free Energy]] of a binary alloys is relative to the molar fractions of each material in the alloy, and depends on mixing:
Before mixing:
$$G_1 = X_AG_A + X_BG_B$$
After mixing:
$$G_2=G_1+\Delta G_{mix}$$
Where
$$\Delta G_{mix} = RT(X_A\ln{X_A}+X_B\ln{X_B})$$
So
$$G_2=X_AG_A + X_BG_B + RT(X_A\ln{X_A}+X_B\ln{X_B})$$
If Mixing Gibbs Energy is less than 1, it prefers to mix.

The [[Chemical Potential]] is related to the [[Gibbs Free Energy]] of a material by:
$$G=\mu X$$
So from that and $G_2$ you get:
$$\mu_A = G_A + RT\ln X_A$$
In an ideal situation, $\Delta H_{mix} = 0$ where there is no difference for A and B to be neighbours or not in energy.

In reality, $\Delta H_{mix} \neq 0$, it instead is:
$$\Delta H_{mix}=n_{AB}\epsilon=n_{AB}\left[\epsilon_{AB}-\frac{\epsilon_{AA} + \epsilon_{BB}}{2}\right]$$
Where $\epsilon$ is the difference in [[bond energy]] of A-B and the average A-A and B-B bonds. When $\epsilon=0$ then it is ideal, which makes sense as there is no difference in an ideal situation between neighbours. 

## Ch 3
[[Surface Energy]] is the energy required to create a surface of a phase, related to [[Bond Energy]] by [[Broken Bond Density]]
$$ \gamma = BBD\cdot \frac{\epsilon_b}{2}$$
|                         | Higher Surface Energy |
| ----------------------- | --------------------- |
| Adhesion                | Higher                |
| Specific Surface Energy | Higher                |
| Bond Energy             | Higher                |
| Enthalpy                | Higher                |
| Young's Modulus         | Higher                |
| Einstein Frequency      | Higher                |
| Melting Temperature     | Higher                |
| Adhesion                | Higher                |
| Broken Bond Density     | Higher                |
| Friction                | Higher                |
| Bacterial Attraction    | Higher                |
| Temperature             | Lower                 |
| Molar Volume            | Lower                 |
| Strain Energy           | Lower                 | 
Liquid Vapor [[Surface Energy]] is much lower than Solid Vapor [[Surface Energy]] and changes at melting temperature

[[Broken Bond Density]] is dependant on the [[Crystallographic Orientation]] as the number of broken bonds in a given direction will be different for a given crystal structure
$$BBD = \frac{\text{\# Atoms}\cdot\text{\# Neighbours}}{\text{Plane Area}}$$
For polycrystals Solid Vapor [[Surface Energy]] is calculated via the average of orientations:
$$\gamma^{SV}=C_1\frac{\Delta H_s}{V_m^\frac{2}{3}}$$
For a [[Wulff Plot]] the resulting crystal shape has its vertices at the roundest/furthest part of each curves, and straight lines are tangential to the vertices of the plot.
![[Wulff Plot.png]]
The normal vector of a direction relative to the surface energy of a direction is the same for any direction:
$$\frac{\gamma_i}{n_i}=\frac{\gamma_j}{n_j}$$


High-index planes like steps and kinks have higher [[Surface Energy]]
$$\gamma^{SV}(\theta)=(\cos\theta\cdot BBD_V + \sin\theta\cdot BBD_L)\frac{\epsilon_b}{2}$$
From a stereograph, the lower reference orientation is L and the higher reference orientation is V.

The surface is easier to melt than the inside of a material. The material melts when the atomic mean square displacement is approximately 15% of the lattice constant.

[[Langmuir-McLean Relation]] provides the relationship between the surface 
$$\frac{X_B^S}{1-X_B^S}=\frac{X_B}{1-X_B}e^{\frac{-\Delta G_S}{RT}}$$ The [[Surface Enrichment Ratio]] is as follows:
$$\beta_S=\frac{X_B^S}{X_B}$$
At low impurities:
$$\beta_S=\exp{\frac{0.24\Delta H_{mix}+1.3\times 10^8(mol^{-\frac{1}{3}})(\gamma_A^{SV}-\gamma_B^{SV})V^{B\frac{2}{3}}_m}{RT}}$$

## Ch 4
Processes of Vapor Phase and Surface Engineering
- Physical [[Vapor Deposition]] (PVD)
	- Evaporation
	- Sputtering
	- Ion plating
	- 50-500C; metal, ceramics, polymer
	- 2-5 micron thickness
- Chemical [[Vapor Deposition]] (CVD)
	- <200C
	- 5-20 micron thickness

Deposition rate and flux can be increased with more atoms, less mobility, and less temperature
$$J = \frac{P}{\sqrt{2\pi mk_B T}}$$
$$\nu_g^{SV}=\frac{P-P_0}{\sqrt{2\pi mk_B T}}$$
$$P_0=Ae^{-\frac{B}{T}}$$
The evaporation rate occurs at the same time as the deposition rate, and is proportional to higher temperature

Defects and dislocations can propagate and help with facilitating V/S transformation.

Work of adhesion can be calculated by the 2 surface energies minus the [[interfacial energy]]
![[Pasted image 20220425123959.png]]

[[Epitaxy]] is the growth from the substrate with the same crystal structure due to small mismatch strain
large mismatch strain can cause rippled/clustered films instead


Faster deposition rate = difficulty in texture

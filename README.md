<div align="left" style="position: relative;">
<h1>SPACESAGE</h1>
<p align="left">
	<em>An Advanced Astronomy Analysis Toolkit with Machine Learning for Galaxy Classification, Redshift Analysis, Exoplanet Habitability, and Orbital Dynamics</em>
</p>
<p align="left">
	<img src="https://img.shields.io/github/license/Riddhish1/SpaceSage?style=default&logo=opensourceinitiative&logoColor=white&color=2e0339" alt="license">
	<img src="https://img.shields.io/github/last-commit/Riddhish1/SpaceSage?style=default&logo=git&logoColor=white&color=2e0339" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Riddhish1/SpaceSage?style=default&color=2e0339" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Riddhish1/SpaceSage?style=default&color=2e0339" alt="repo-language-count">
</p>
<p align="left">
	<img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react&logoColor=white" alt="React">
	<img src="https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/TensorFlow-2.x-FF6F00?style=flat&logo=tensorflow&logoColor=white" alt="TensorFlow">
	<img src="https://img.shields.io/badge/Python-3.x-3776AB?style=flat&logo=python&logoColor=white" alt="Python">
	<img src="https://img.shields.io/badge/TailwindCSS-3.4.1-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="TailwindCSS">
</p>
</div>
<br clear="right">

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#-usage)
  - [🧪 Testing](#-testing)
- [🔰 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

SpaceSage is a comprehensive astronomy toolkit that leverages advanced machine learning techniques to analyze astronomical data. The platform offers four main capabilities: galaxy classification, redshift analysis, exoplanet habitability assessment, and satellite orbit optimization. Built with React and TypeScript for the frontend interface and Python with various ML libraries for the backend models, SpaceSage provides astronomers, researchers, and space enthusiasts with powerful tools for space data analysis.

---

## 👾 Features

### 🌌 Galaxy Classifier
- **CNN-based classification** of galaxies into six distinct categories (Round Elliptical, In-between Elliptical, Cigar-shaped Elliptical, Edge-on Spiral, Unbarred Spiral, Barred Spiral)
- Utilizes the **Galaxy10 dataset** to achieve **82.56% accuracy**
- Visual feedback with uploaded galaxy images

### 🔭 Andre Shift (Redshift Analysis)
- Analyzes **Doppler shift** in spectral data to determine galactic motion
- **Random Forest model** for classifying approaching vs receding celestial objects
- Calculation of redshift values and radial velocities from wavelength data

### 🪐 ExoHabit (Exoplanet Habitability)
- Assesses potential habitability of exoplanets based on atmospheric composition
- Analyzes key gases (O₂, CO₂, CH₄, H₂O, O₃) from spectral data
- Machine learning model synthesized from spectroscopic atmospheric analysis

### 🛰️ Orbita (Satellite Orbit Optimization)
- **BERT-based NLP model** for determining optimal satellite orbits
- Classification of satellite types into LEO, MEO, GEO, HEO, and SSO
- Integration with real-time satellite congestion data

---

## 📁 Project Structure

```sh
└── SpaceSage/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── models
    │   ├── andromeda.ipynb      # Redshift analysis model
    │   ├── atm_cond.ipynb       # Exoplanet habitability model
    │   ├── galaxy.ipynb         # Galaxy classification CNN
    │   └── orbita.ipynb         # Satellite orbit optimization model
    ├── package.json
    ├── src
    │   ├── App.tsx              # Main application routing
    │   ├── components
    │   │   └── Navbar.tsx       # Navigation component
    │   ├── index.css
    │   ├── main.tsx
    │   ├── pages
    │   │   ├── About.tsx        # About page
    │   │   ├── AndreShift.tsx   # Redshift analysis interface
    │   │   ├── AndreShiftInfo.tsx # Redshift information
    │   │   ├── ExoHabit.tsx     # Exoplanet habitability interface 
    │   │   ├── ExoHabitInfo.tsx # Exoplanet habitability information
    │   │   ├── GalaxyClassifier.tsx # Galaxy classification interface
    │   │   ├── GalaxyInfo.tsx   # Galaxy classification information
    │   │   ├── Home.tsx         # Landing page
    │   │   ├── Orbita.tsx       # Satellite orbit interface
    │   │   ├── OrbitaInfo.tsx   # Satellite orbit information
    │   │   └── app.py           # Flask backend for model integration
    │   └── vite-env.d.ts
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

### 📂 Project Index
<details open>
	<summary><b><code>SPACESAGE/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/postcss.config.js'>postcss.config.js</a></b></td>
				<td>PostCSS configuration for processing CSS with plugins</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/tsconfig.node.json'>tsconfig.node.json</a></b></td>
				<td>TypeScript configuration for Node.js environment</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td>Dependency lock file ensuring consistent installs</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
				<td>Main TypeScript configuration file</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/tailwind.config.js'>tailwind.config.js</a></b></td>
				<td>TailwindCSS configuration for styling</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/tsconfig.app.json'>tsconfig.app.json</a></b></td>
				<td>TypeScript configuration for the application</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/package.json'>package.json</a></b></td>
				<td>Project metadata and dependencies</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/vite.config.ts'>vite.config.ts</a></b></td>
				<td>Vite build tool configuration</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/index.html'>index.html</a></b></td>
				<td>Main HTML entry point</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/eslint.config.js'>eslint.config.js</a></b></td>
				<td>ESLint configuration for code quality</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/src/main.tsx'>main.tsx</a></b></td>
				<td>Main entry point for React application</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/src/index.css'>index.css</a></b></td>
				<td>Global CSS styles including space theme</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/src/App.tsx'>App.tsx</a></b></td>
				<td>Root component with routing and theme context</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/src/vite-env.d.ts'>vite-env.d.ts</a></b></td>
				<td>TypeScript declarations for Vite</td>
			</tr>
			</table>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/src/components/Navbar.tsx'>Navbar.tsx</a></b></td>
						<td>Navigation bar component with theme toggle</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>pages</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/src/pages/Orbita.tsx'>Orbita.tsx</a></b></td>
						<td>Satellite orbit optimization interface</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/src/pages/app.py'>app.py</a></b></td>
						<td>Flask backend for model inference and API endpoints</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/src/pages/GalaxyClassifier.tsx'>GalaxyClassifier.tsx</a></b></td>
						<td>Galaxy classification interface with image upload</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/src/pages/ExoHabitInfo.tsx'>ExoHabitInfo.tsx</a></b></td>
						<td>Information about exoplanet habitability analysis</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/src/pages/AndreShiftInfo.tsx'>AndreShiftInfo.tsx</a></b></td>
						<td>Information about redshift and Doppler effect</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/src/pages/Home.tsx'>Home.tsx</a></b></td>
						<td>Landing page with feature overview</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/src/pages/About.tsx'>About.tsx</a></b></td>
						<td>About page with project information</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/src/pages/ExoHabit.tsx'>ExoHabit.tsx</a></b></td>
						<td>Exoplanet habitability assessment interface</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/src/pages/OrbitaInfo.tsx'>OrbitaInfo.tsx</a></b></td>
						<td>Information about satellite orbit types</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/src/pages/logo.PNG'>logo.PNG</a></b></td>
						<td>SpaceSage logo image</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/src/pages/AndreShift.tsx'>AndreShift.tsx</a></b></td>
						<td>Redshift analysis interface</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/src/pages/GalaxyInfo.tsx'>GalaxyInfo.tsx</a></b></td>
						<td>Information about galaxy classification</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- models Submodule -->
		<summary><b>models</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/models/andromeda.ipynb'>andromeda.ipynb</a></b></td>
				<td>Random Forest model for redshift analysis and celestial motion classification</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/models/galaxy.ipynb'>galaxy.ipynb</a></b></td>
				<td>CNN model for galaxy classification using transfer learning</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/models/orbita.ipynb'>orbita.ipynb</a></b></td>
				<td>BERT-based NLP model for satellite orbit classification</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Riddhish1/SpaceSage/blob/master/models/atm_cond.ipynb'>atm_cond.ipynb</a></b></td>
				<td>Random Forest model for exoplanet habitability assessment based on atmospheric components</td>
			</tr>
			</table>
		</blockquote>
	</details>
</details>

---
## 🚀 Getting Started

### ⚙️ Installation

Install SpaceSage using one of the following methods:

**Build from source:**

1. Clone the SpaceSage repository:
```sh
❯ git clone https://github.com/Riddhish1/SpaceSage
```

2. Navigate to the project directory:
```sh
❯ cd SpaceSage
```

3. Install the project dependencies:

**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```

4. Install Python dependencies for the ML backend:

```sh
❯ pip install -r requirements.txt
```

### 🤖 Usage

1. Start the frontend development server:

```sh
❯ npm run dev
```

2. In a separate terminal, start the backend Flask server:

```sh
❯ cd src/pages
❯ python app.py
```

3. The application should now be running at http://localhost:5173, with the backend API at http://localhost:5000.

### 🧪 Testing

Run the test suite using the following command:

```sh
❯ npm test
```

## 🔰 Contributing

- **💬 [Join the Discussions](https://github.com/Riddhish1/SpaceSage/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/Riddhish1/SpaceSage/issues)**: Submit bugs found or log feature requests for the `SpaceSage` project.
- **💡 [Submit Pull Requests](https://github.com/Riddhish1/SpaceSage/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Riddhish1/SpaceSage
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/Riddhish1/SpaceSage/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Riddhish1/SpaceSage">
   </a>
</p>
</details>

---

## 🎗 License

This project is protected under the MIT License. For more details, refer to the [LICENSE](LICENSE) file.

---

## 🙌 Acknowledgments

- The Galaxy10 dataset used in the galaxy classification model
- NASA exoplanet data for habitability assessment model training
- CelesTrak for satellite orbit data 
- HuggingFace Transformers library for BERT-based models
- TensorFlow and PyTorch for machine learning model development
- React, TypeScript, and TailwindCSS for the frontend

---

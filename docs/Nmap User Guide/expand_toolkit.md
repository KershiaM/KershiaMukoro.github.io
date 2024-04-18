---
title: "Expanding Your Nmap Toolkit"
sidebar_position: 5
---

import nse from '../../static/img/nse.jpg';
import zenmap from '../../static/img/zenmap.png';

### Verbosity and Exporting Scan Results

Penetration tests can extend over days or weeks. Exporting Nmap results prevents redundant work and aids in report creation.

#### Export Methods

- **Verbose Output:** Provides detailed information about the scan and is useful for monitoring the actions taken by Nmap on a network:

```bash
nmap -v scanme.nmap.org
```

- **Normal Output:** Exports the scan results to a text file:

```bash
nmap -oN output.txt scanme.nmap.org
```

- **XML Output:** Preferred by many pen-testing tools for its parsability:

```bash
nmap -oX output.xml scanme.nmap.org
```

- **Multiple Formats:** Export scan results in all available formats simultaneously:

```bash
nmap -oA output scanme.nmap.org
```

### Nmap Scripting Engine (NSE)

NSE offers a powerful toolset for automating networking tasks through scripting. Users can access numerous scripts, modify them with Lua, or create custom scripts tailored to specific needs. NSE also includes scripts for network attacks. More in-depth information on Nmap's scripting engine can be found [here.](https://nmap.org/book/nse.html)

<p>
<img src={nse} alt='NSE' style={{width: 800}}/>
<figcaption>Use Nmap Scripting Engine (NSE) for Network Automation and Security.</figcaption>
</p>

### Zenmap

Zenmap is the graphical user interface for Nmap, offering an easier start for beginners with visual network mappings. Users can save and search scans without needing to navigate through command-line interfaces. Zenmap is free, open source, and usually included in the Nmap download. Users can download Zenmap from the official [Nmap download page](https://nmap.org/download) and more information on using Zenmap can be found [here.](https://nmap.org/book/zenmap.html)

<p>
<img src={zenmap} alt='Zenmap GUI' style={{width: 600}} />
<figcaption>Zenmap's Graphical User Interface for Nmap Network Scanning.</figcaption>
</p>

---
title: "Using Nmap"
sidebar_position: 4
---

import opt1 from '../../../static/img/opt1.png'
import opt2 from '../../../static/img/opt2.png'

:::info Prerequisites
Use of Nmap requires familiarity with command-line interfaces (CLI) for basic network monitoring.
:::

## Nmap Help

- Run the command `nmap` with no arguments to use Nmap's built-in help command to display a list summarizing all flags and options (see **Figure 1**).
- The command `nmap -h` returns the same list of flags and options.
- The latest version of the man page is available [here.](https://svn.nmap.org/nmap/docs/nmap.usage.txt)

:::warning Attention
Certain options will only work with specific types of scans and Nmap will warn users of unsupported option combinations.
:::

<p>
<figcaption>**Figure 1.** Options Summary Pages</figcaption>
<img src={opt1} alt='Option Reference Page' style={{width: 415.8}} hspace='10' />
<img src={opt2} alt='Option Reference Page' style={{width: 400}} hspace='10' />
</p>

## Scanning Techniques

Nmap's command-line interface gives users the ability to perform different kinds of scans. Run basic scans with simple command syntax, or use a combination of command flags and parameters to execute more complex, finely tuned scans.

### Basic Scanning Techniques

- **Ping Scan:** `nmap -sn (target)`  
  Use this command to quickly scan the target to check if it's online without performing a full port scan. A ping scan identifies all the IP addresses online without sending packets to the hosts.

- **Port Scan:** `nmap (target)`  
  The basic command to perform a port scan on the target to identify open ports.

- **Version Detection:** `nmap -sV (target)`  
  This command enables version detection and gives more information about the services running on the open ports.

#### Basic Scan Examples

- To scan a single IP:

```bash
nmap 192.168.1.1
```

- To scan a range:

```bash
nmap 192.168.1.1-255
```

- To scan a subnet:

```bash
nmap 192.168.1.0/24
```

- To scan from a file:

```bash
nmap -iL /input_ips.txt
```

&nbsp;

### Advanced Scanning Techniques

- **Stealth Scan:** `nmap -sS (target)`  
  This command performs a SYN scan. This type of scan is less likely to be logged by the target's system, making it a stealthier option for scanning.

- **OS Detection:** `nmap -O (target)`  
  Enables operating system detection, which tries to identify the operating system running on the target.

- **Aggressive Scan:** `nmap -A (target)`  
  This combines version detection, OS detection, script scanning, and traceroute in one command, and provides a comprehensive overview of the target.

- **Script Scan:** `nmap --script=(script category) (target)`  
  Allows the user to specify a category of NSE (Nmap Scripting Engine) scripts to run against the target. Offers more in-depth probing based on the scripts' purposes.

#### Advanced Scan Examples:

- For stealth scanning a single IP:

```bash
nmap -sS 192.168.1.1
```

- For aggressive scanning of a subnet:

```bash
nmap -A 192.168.1.0/24
```

- For OS detection:

```bash
nmap -O 192.168.1.1
```

- For running default scripts against a target:

```bash
nmap --script=default 192.168.1.1
```

&nbsp;

:::warning Attention
Nmap is a powerful tool and advanced scanning techniques should be used with caution. Advanced scans can be intrusive and are more likely to be detected by intrusion detection systems. Use Nmap ethically, and always ensure you have explicit permission to scan the network or device. For more detailed information and advanced scanning techniques, refer to the [Nmap Official Documentation.](https://nmap.org/docs.html)
:::

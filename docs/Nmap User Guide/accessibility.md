---
title: 'Accessibility'
sidebar_position: 8
---


Ensuring Nmap is accessible to all users, including those with disabilities, is important. Here are some tips and tools to help make using Nmap more accessible:

### Screen Readers
Users who are visually impaired can use screen readers to interact with the command line:

- **Windows:** Use built-in screen readers like Narrator, or third-party applications like NVDA (NonVisual Desktop Access).  
- **Linux:** Tools like Orca can provide spoken feedback of text that appears on the screen.
- **macOS:** VoiceOver is integrated into the macOS system and provides comprehensive screen reading capabilities.

### Keyboard Shortcuts
Navigating with keyboard shortcuts can enhance usability for users with limited mobility:

- Most terminals allow you to use keyboard shortcuts to navigate the command line. Learning these shortcuts can reduce the need for mouse input and improve efficiency.
- Customizable shortcuts in terminal applications can help users set up their environments according to their needs.

Here is a list of commonly used shortcuts in terminal applications that enhance navigation and efficiency. These can generally be used in most terminal environments like Bash on Linux or macOS, and Command Prompt or PowerShell on Windows.

- **Basic Navigation**
       - **Ctrl** + **A:** Move cursor to the beginning of the line.
       - **Ctrl** + **E:** Move cursor to the end of the line.
       - **Ctrl** + **Left Arrow/Right Arrow:** Move cursor one word left/right (this may vary depending on the terminal).
       - **Ctrl** + **U:** Clears the line from the cursor to the beginning.
       - **Ctrl** + **K:** Clears the line from the cursor to the end.

- **Editing**
       - **Ctrl** + **W:** Cut the word before the cursor, adding it to the clipboard.
       - **Ctrl** + **Y:** Paste the last thing to be cut from the clipboard.
       - **Alt** + **Backspace:** Delete the word before the cursor (this shortcut might behave differently on some terminals).

- **History**
       - **Ctrl** + **P:** Move one command up in the command history.
       - **Ctrl** + **N:** Move one command down in the command history.
       - **Ctrl** + **R:** Search the command history as you type.

- **Process Control**
       - **Ctrl** + **C:** Terminate the current command.
       - **Ctrl** + **Z:** Suspend the current command by sending it to the background.

- **Window Management**
       - **Ctrl** + **L:** Clear the screen (similar effect to the clear command).
       - **Ctrl** + **S:** Pause the output on the screen (useful for long outputs).
       - **Ctrl** + **Q:** Resume output to the screen if paused.

- **Miscellaneous**
       - **Ctrl** + **D:** Close the terminal if the line is empty. In the shell, this logs you out or exits the terminal.

### Text Size and Color Contrast
Adjusting text size and color contrast can help users with visual impairments:

- Increase the text size in your terminal settings to make the output of Nmap scans easier to read.
- Adjust color schemes for higher contrast in terminal settings. High contrast themes can be particularly helpful.

### Command Line Accessibility Tips
- Use tab completion to reduce the amount of typing needed, making command line use easier for those with motor disabilities.
- Regularly clear the screen to reduce clutter and make the current command more visible (```clear``` on Linux/ macOS and ```cls``` on Windows).

### Accessible Documentation
Ensure that all Nmap documentation is accessible:

- Provide text-based versions of graphical content, such as diagrams or screenshots.
- Use clear, concise language and structure content with headings for easier navigation by screen readers.



document.addEventListener("DOMContentLoaded", function () {
    const maxQuestions = 35;
  
  
    const originalQuestions = [

            {
              "question": "The basic components of an application are made up of two concepts, namely:",
              "options": [
                "Information technology and information system",
                "Hardware and software",
                "Data and processing",
                "Input and output"
              ],
              "answer": "Information technology and information system"
            },
            {
              "question": "____ is a set, and a software is a subset.",
              "options": [
                "A program",
                "A function",
                "A code",
                "An algorithm"
              ],
              "answer": "A program"
            },
            {
              "question": "_____ is a set of programs designed to perform a well-defined function.",
              "options": [
                "An operating system",
                "A software suite",
                "A compiler",
                "A software"
              ],
              "answer": "A software"
            },
            {
              "question": "Depending on its use and area of implementation, software can be divided into three major types, namely:",
              "options": [
                "Programming software, development software, and utility software",
                "System software, application software, and utility software",
                "Database software, networking software, and security software",
                "Web software, mobile software, and desktop software"
              ],
              "answer": "System software, application software, and utility software"
            },
            {
              "question": "_____ is a graphical interface used to display the content of an application for the user to view and interact with it.",
              "options": [
                "A screen",
                "A window",
                "A frame",
                "A panel"
              ],
              "answer": "A window"
            },
            {
              "question": "The window was first produced by Microsoft in:",
              "options": [
                "October 1985",
                "November 1985",
                "December 1985",
                "January 1986"
              ],
              "answer": "November 1985"
            },
            {
              "question": "_____ is the on-screen area on which windows, icons, menus, dialog boxes, and open applications appear.",
              "options": [
                "A desktop",
                "A workspace",
                "A canvas",
                "A display"
              ],
              "answer": "A desktop"
            },
            {
              "question": "By default, there are ___ to ___ icons on the desktop.",
              "options": [
                "2 to 3",
                "4 to 5",
                "6 to 7",
                "8 to 9"
              ],
              "answer": "4 to 5"
            },
            {
              "question": "_____ are pictorial representations of programs.",
              "options": [
                "Logos",
                "Symbols",
                "Icons",
                "Emoticons"
              ],
              "answer": "Icons"
            },
            {
              "question": "Examples of icons are:",
              "options": [
                "Recycle bin, Internet Explorer, My Document, and Network Neighborhood",
                "Play, Pause, Stop, and Forward",
                "Home, About Us, Services, and Contact",
                "Folder, File, Edit, and View"
              ],
              "answer": "Recycle bin, Internet Explorer, My Document, and Network Neighborhood"
            },
            {
              "question": "_____ are the software that directly allows the user to interact with the hardware components of a computer system.",
              "options": [
                "Utility software",
                "Application software",
                "System software",
                "Operating system"
              ],
              "answer": "System software"
            },
            {
              "question": "The system software can be called the:",
              "options": [
                "Secondary software",
                "Primary software",
                "Alpha software",
                "Beta software"
              ],
              "answer": "Alpha software"
            },
            {
              "question": "The system software can be further divided into ___ major types.",
              "options": [
                "2",
                "3",
                "4",
                "5"
              ],
              "answer": "4"
            },
            {
              "question": "The four types of system software are:",
              "options": [
                "The operating system, the language processor, the device drivers, and the BIOS",
                "The compiler, the interpreter, the linker, and the loader",
                "The kernel, the shell, the GUI, and the command-line interface",
                "The RAM, the ROM, the CPU, and the GPU"
              ],
              "answer": "The operating system, the language processor, the device drivers, and the BIOS"
            },
            {
              "question": "BIOS stands for:",
              "options": [
                "Basic Input Output System",
                "Binary Input Output System",
                "Basic Integrated Output System",
                "Biometric Input Output System"
              ],
              "answer": "Basic Input Output System"
            },
            {
              "question": "____ is the main program that governs and maintains the inter-cooperation of the components of a computer system.",
              "options": [
                "The compiler",
                "The interpreter",
                "The operating system",
                "The linker"
              ],
              "answer": "The operating system"
            },
            {
              "question": "Examples of operating systems are:",
              "options": [
                "Ubuntu, Android, iOS, and Chrome OS",
                "Microsoft Windows, Linux, macOS",
                "Windows 7, Windows 8, Windows 10, and Windows 11",
                "All of the above"
              ],
              "answer": "Microsoft Windows, Linux, macOS"
            },
            {
              "question": "There are ____ types of language processors.",
              "options": [
                "2",
                "3",
                "4",
                "5"
              ],
              "answer": "3"
            },
            {
              "question": "The three types of language processors are:",
              "options": [
                "Machine level language, Assembly level language, High level language",
                "Compiler, Assembler, Interpreter",
                "Basic, Cobol, Fortran",
                "Java, Python, C++"
              ],
              "answer": "Machine level language, Assembly level language, High level language"
            },
            {
              "question": "The machine level language only understands the ____.",
              "options": [
                "Human-readable language",
                "Digital signal or the binary language which consists of strings of 0's and 1's",
                "Programming syntax",
                "Assembly language"
              ],
              "answer": "Digital signal or the binary language which consists of strings of 0's and 1's"
            },
            {
              "question": "Assembly language uses mnemonics to represent each low-level machine instruction or operation code, also called:",
              "options": [
                "Command set",
                "Operand set",
                "Opcode",
                "Operation set"
              ],
              "answer": "Opcode"
            },
            {
              "question": "______ are simple English statements that humans use to program and code, as it is easy to read and understand in the human world.",
              "options": [
                "Binary code",
                "Machine language",
                "High-level language",
                "Assembly language"
              ],
              "answer": "High-level language"
            },
            {
              "question": "______ is a software program that runs on the computer, e.g., web browser, email, etc.",
              "options": [
                "System software",
                "Operating system",
                "Application software",
                "Utility software"
              ],
              "answer": "Application software"
            },
            {
              "question": "_____ is a small firmware that controls the peripheral or the input-output devices attached to the system.",
              "options": [
                "BIOS",
                "Kernel",
                "Shell",
                "Operating system"
              ],
              "answer": "BIOS"
            },
            {
              "question": "_____ is responsible for starting the operating system or initiating the booting process.",
              "options": [
                "BIOS",
                "Kernel",
                "Shell",
                "Operating system"
              ],
              "answer": "BIOS"
            },
            {
              "question": "Application software includes such things as:",
              "options": [
                "Device drivers, system utilities, antivirus software",
                "Data base programs, word processors, web browsers, and spreadsheets",
                "Compiler, assembler, interpreter",
                "RAM, ROM, CPU, GPU"
              ],
              "answer": "Data base programs, word processors, web browsers, and spreadsheets"
            },
            {
              "question": "Application software is divided into 2 types, namely:",
              "options": [
                "General purpose and specific purpose application software",
                "System software and utility software",
                "Free software and proprietary software",
                "Open-source software and closed-source software"
              ],
              "answer": "General purpose and specific purpose application software"
            },
            {
              "question": "____ are the types of application software that come in-built and ready to use.",
              "options": [
                "Custom software",
                "Specialized software",
                "General purpose application software",
                "System software"
              ],
              "answer": "General purpose application software"
            },
            {
              "question": "Examples of general purpose application software are:",
              "options": [
                "Microsoft Excel, Adobe Photoshop",
                "Device Manager, Disk Cleanup",
                "BIOS, Kernel",
                "Windows, Linux"
              ],
              "answer": "Microsoft Excel, Adobe Photoshop"
            },
            {
              "question": "____ are the types of software that are customizable and mostly used in real-time or business environments.",
              "options": [
                "General purpose application software",
                "Specific purpose application software",
                "System software",
                "Utility software"
              ],
              "answer": "Specific purpose application software"
            },
            {
              "question": "Application software programs are created to facilitate a variety of functions, including:",
              "options": [
                "Gaming, social media, browsing",
                "Manipulating information, manipulating data, constructing visuals, coordinating resources, and calculating figures",
                "Hardware maintenance, system optimization",
                "Text editing, file management, network configuration"
              ],
              "answer": "Manipulating information, manipulating data, constructing visuals, coordinating resources, and calculating figures"
            },
            {
              "question": "Common examples of web applications include:",
              "options": [
                "Device drivers, system utilities, antivirus software",
                "Word processing, spreadsheet, database",
                "Web-based email, social media platforms, wikis, and online auctions",
                "Operating system, programming language, device drivers"
              ],
              "answer": "Web-based email, social media platforms, wikis, and online auctions"
            },
            {
              "question": "___ is a piece of software designed for a single purpose or a single function.",
              "options": [
                "Application",
                "System software",
                "Compiler",
                "Utility software"
              ],
              "answer": "Application"
            },
            {
              "question": "___ is a piece of software that performs a variety of related functions.",
              "options": [
                "Compiler",
                "Application",
                "Utility software",
                "System software"
              ],
              "answer": "Application"
            },
            {
              "question": "_____ provides high utility to the user and the system.",
              "options": [
                "System software",
                "Application software",
                "Utility software",
                "Firmware"
              ],
              "answer": "Utility software"
            },
            {
              "question": "The three popular applications are:",
              "options": [
                "Word processing, graphics editing, video editing",
                "Spreadsheet, database, presentation",
                "Web browsing, email, gaming",
                "Operating system, programming language, device drivers"
              ],
              "answer": "Word processing, spreadsheet, database"
            },
            {
              "question": "CAL stands for:",
              "options": [
                "Computer Assisted Learning",
                "Centralized Access Language",
                "Customer Application Language",
                "Common Application Layer"
              ],
              "answer": "Computer Assisted Learning"
            },
            {
              "question": "One of the challenges of application software is:",
              "options": [
                "Compatibility issues",
                "Limited functionality",
                "Small file size",
                "Bundled with the operating system"
              ],
              "answer": "They are bigger in size and require large storage facilities"
            },
            {
              "question": "DOC, PPC are examples of:",
              "options": [
                "Application software",
                "Utility software",
                "System software",
                "File extensions"
              ],
              "answer": "File extensions"
            },
            {
              "question": "The general default font style in any computer system is:",
              "options": [
                "Arial",
                "Times New Roman",
                "Calibri",
                "Courier New"
              ],
              "answer": "Calibri"
            },
            {
              "question": "The default font number for line margin on the right is 2.54, and on the left is:",
              "options": [
                "2.64",
                "2.34",
                "2.74",
                "2.84"
              ],
              "answer": "2.64"
            },
            {
              "question": "A folder that stores all the files & folders deleted from Windows temporarily, which can be restored again if needed, is called:",
              "options": [
                "Temp folder",
                "Deleted items",
                "Trash",
                "Recycle bin"
              ],
              "answer": "Recycle bin"
            },
            {
              "question": "____ is a small image that represents a file, folder, or program.",
              "options": [
                "Logo",
                "Image thumbnail",
                "Icon",
                "Avatar"
              ],
              "answer": "Icon"
            },
            {
              "question": "When we rest the mouse pointer on an icon, a rectangular box disappears; this is referred to as:",
              "options": [
                "Tooltip",
                "Popup",
                "Caption",
                "Overlay"
              ],
              "answer": "Tooltip"
            },
            {
              "question": "____ displays a list of commands that can be used to perform various tasks.",
              "options": [
                "Toolbar",
                "Status bar",
                "Menu bar",
                "Sidebar"
              ],
              "answer": "Menu bar"
            },
            {
                "question": "To open File Explorer, click:",
                "options": [
                "Start > Programs > Accessories > File Explorer",
                "Start > All Programs > File Explorer",
                "Start > Documents > File Explorer",
                "Start > All Programs > Accessories > File Explorer"
                ],
                "answer": "Start > All Programs > Accessories > File Explorer"
            },
            {
                "question": "Window Explorer is divided into 2 panes, namely:",
                "options": [
                "Upper pane and lower pane",
                "Left pane and right pane",
                "Main pane and side pane",
                "Top pane and bottom pane"
                ],
                "answer": "Left pane and right pane"
            },
            {
                "question": "The left pane displays the list of drives & folders on the computer, while the right pane:",
                "options": [
                "Displays the contents of the selected drive or folder",
                "Displays system information",
                "Shows recent files",
                "Provides navigation options"
                ],
                "answer": "Displays the contents of the selected drive or folder"
            },
            {
                "question": "____ is the common storage unit in a computer.",
                "options": ["Document", "Program", "Folder", "File"],
                "answer": "File"
            },
            {
                "question": "____ is the virtual location for applications, documents, data, or other subfolders.",
                "options": ["Drive", "Folder", "Directory", "Path"],
                "answer": "Folder"
            },
            {
                "question": "Folders are also called:",
                "options": ["Libraries", "Directories", "Collections", "Repositories"],
                "answer": "Directories"
            },
            {
                "question": "To select consecutive files, use:",
                "options": [
                "Ctrl + Click",
                "Shift + Right-click",
                "Shift + Arrow key",
                "Alt + Drag"
                ],
                "answer": "Shift + Arrow key"
            },
            {
                "question": "To delete a file permanently without moving it to the Recycle Bin, select the file and then press:",
                "options": ["Del", "Shift + Del", "Ctrl + Del", "Alt + Del"],
                "answer": "Shift + Del"
            },
            {
                "question": "____ is a software package that enables you to create, edit, print, and save documents for future retrieval and reference.",
                "options": [
                "Spreadsheet",
                "Database",
                "Word processor",
                "Presentation software"
                ],
                "answer": "Word processor"
            },
            {
                "question": "The most recent version of MS Word is:",
                "options": [
                "MS Word 2016",
                "MS Word 2019",
                "MS Word 2020",
                "MS Word 2022"
                ],
                "answer": "MS Word 2019"
            },
            {
                "question": "____ displays the name of the active document.",
                "options": ["Header bar", "Title bar", "Menu bar", "Status bar"],
                "answer": "Title bar"
            },
            {
                "question": "By default, the Quick Access Toolbar appears to the right of the Word icon at the left end of the Title bar and displays the:",
                "options": [
                "Print, Close, and Save buttons",
                "Save, Undo, and Redo buttons",
                "Cut, Copy, and Paste buttons",
                "Format Painter, Clear Formatting, and Font Size buttons"
                ],
                "answer": "Save, Undo, and Redo buttons"
            },
            {
                "question": "____ houses commands or menus that can be used to perform file-related operations such as open or save files, create new documents, print a document, etc.",
                "options": ["File tab", "Toolbar", "Status bar", "Menu bar"],
                "answer": "File tab"
            },
            {
                "question": "To save or save as, press:",
                "options": ["Ctrl + S", "Ctrl + V", "Ctrl + P", "Ctrl + N"],
                "answer": "Ctrl + S"
            },
            {
                "question": "To paste a document, press:",
                "options": ["Ctrl + X", "Ctrl + P", "Ctrl + V", "Ctrl + S"],
                "answer": "Ctrl + V"
            },
            {
                "question": "____ refers to the document area.",
                "options": ["Writing area", "Canvas", "Work area", "Document space"],
                "answer": "Work area"
            },
            {
                "question": "The small arrow at the lower right corner of each group is known as:",
                "options": ["Drop-down menu", "Submenu launcher", "Dialog box launcher", "Settings icon"],
                "answer": "Dialog box launcher"
            },
            {
                "question": "To highlight the entire document, press:",
                "options": ["Ctrl + A", "Ctrl + H", "Ctrl + C", "Ctrl + V"],
                "answer": "Ctrl + A"
            },
            {
                "question": "To bold, press:",
                "options": ["Ctrl + B", "Ctrl + U", "Ctrl + I", "Ctrl + J"],
                "answer": "Ctrl + B"
            },
            {
                "question": "To select a column of text, press:",
                "options": [
                "Ctrl + Shift + F8 and then use any of the arrow keys to move until the desired column is covered",
                "Ctrl + J",
                "Ctrl + U",
                "Ctrl + I"
                ],
                "answer": "Ctrl + Shift + F8 and then use any of the arrow keys to move until the desired column is covered"
            },
            {
                "question": "To justify text, press:",
                "options": ["Ctrl + J", "Ctrl + U", "Ctrl + B", "Ctrl + I"],
                "answer": "Ctrl + J"
            },
            {
                "question": "To underline text, press:",
                "options": ["Ctrl + U", "Ctrl + B", "Ctrl + I", "Ctrl + J"],
                "answer": "Ctrl + U"
            },
            {
                "question": "To copy text, press:",
                "options": ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + P"],
                "answer": "Ctrl + C"
            },
            {
                "question": "To italicize text, press:",
                "options": ["Ctrl + I", "Ctrl + U", "Ctrl + B", "Ctrl + J"],
                "answer": "Ctrl + I"
            },
            {
                "question": "To launch the navigation pane, press:",
                "options": ["Ctrl + N", "Ctrl + F", "Ctrl + H", "Ctrl + J"],
                "answer": "Ctrl + F"
            },
            {
                "question": "To open a new document, press:",
                "options": ["Ctrl + N", "Ctrl + O", "Ctrl + S", "Ctrl + P"],
                "answer": "Ctrl + N"
            },
            {
                "question": "To open an existing document, press:",
                "options": ["Ctrl + O", "Ctrl + N", "Ctrl + S", "Ctrl + P"],
                "answer": "Ctrl + O"
            },
            {
                "question": "____ is when the size of the initial letter of the paragraph is exaggerated.",
                "options": ["Italic", "Drop cap", "Bold", "Underline"],
                "answer": "Drop cap"
            },
            {
                "question": "To preview, press:",
                "options": ["Ctrl + P", "Ctrl + N", "Ctrl + S", "Ctrl + O"],
                "answer": "Ctrl + P"
            },
            {
                "question": "To cut text, press:",
                "options": ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + P"],
                "answer": "Ctrl + X"
            },
            {
                "question": "To align text, press:",
                "options": ["Ctrl + E", "Ctrl + J", "Ctrl + B", "Ctrl + U"],
                "answer": "Ctrl + E"
            },
            {
                "question": "To redo, press:",
                "options": ["Ctrl + Y", "Ctrl + Z", "Ctrl + X", "Ctrl + C"],
                "answer": "Ctrl + Y"
            },
            {
                "question": "To undo, press:",
                "options": ["Ctrl + Z", "Ctrl + Y", "Ctrl + X", "Ctrl + C"],
                "answer": "Ctrl + Z"
            },
            {
                "question": "____ is a collection of worksheets.",
                "options": ["Table", "Workbook", "Spreadsheet", "Document"],
                "answer": "Workbook"
            },
            {
                "question": "The default paper size in MS Word is:",
                "options": ["8.5 by 11", "8 by 10", "A4", "Legal"],
                "answer": "8.5 by 11"
            },
            {
                "question": "____ is a key feature when giving your spreadsheet a more organized and consistent look.",
                "options": ["Font style", "Cell alignment", "Row height", "Column width"],
                "answer": "Cell alignment"
            },
            {
                "question": "____ is a program used for numerical and non-numerical calculations.",
                "options": ["Microsoft PowerPoint", "Microsoft Word", "Microsoft Excel", "Microsoft Access"],
                "answer": "Microsoft Excel"
            },
            {
                "question": "The two main features of Microsoft Excel are:",
                "options": [
                "Data entry and word processing",
                "Analysis and presentation",
                "Graphics editing and design",
                "Communication and collaboration"
                ],
                "answer": "Analysis and presentation"
            },
            {
                "question": "____ is the intersection of a row and column.",
                "options": ["Cell", "Table", "Spreadsheet", "Workbook"],
                "answer": "Cell"
            },
            {
                "question": "The number of rows in an Excel sheet ranges from:",
                "options": ["1 to 1,048,576", "1 to 65,536", "1 to 256", "1 to 16,384"],
                "answer": "1 to 1,048,576"
            },
            {
                "question": "For the columns in Excel, a letter ranges from A to XFD. One for each of the column cells is:",
                "options": ["256", "65,536", "16,384", "1,048,576"],
                "answer": "16,384"
            },
            {
                "question": "____ is the panel at the top portion of the document.",
                "options": ["Ribbon", "Toolbar", "Menu", "Sidebar"],
                "answer": "Ribbon"
            },
            {
                "question": "____ is a floating toolbar that displays common formatting tools such as bold, italics, fonts, font size, and font color.",
                "options": ["Ruler", "Toolbar", "Mini toolbar", "Formatting bar"],
                "answer": "Mini toolbar"
            },
            {
                "question": "____ displays the data or formula stored in the active cell.",
                "options": ["Formula view", "Cell view", "Data view", "Formula bar"],
                "answer": "Formula bar"
            },
            {
                "question": "The tab containing various tools related to checking spelling, translating words, adding comments, and protecting the workbook is called:",
                "options": ["Home tab", "View tab", "Insert tab", "Review tab"],
                "answer": "Review tab"
            },
            {
                "question": "The seven functions of Excel are:",
                "options": [
                "Database functions, web functions, design functions, presentation functions, programming functions, security functions, networking functions",
                "Financial functions, logical functions, text functions, look-up & reference functions, math & trig functions, and more functions",
                "Communication functions, graphics functions, storage functions, system functions, multimedia functions, accessibility functions, navigation functions",
                "Data analysis functions, gaming functions, internet functions, entertainment functions, collaboration functions, automation functions, customization functions"
                ],
                "answer": "Financial functions, logical functions, text functions, look-up & reference functions, math & trig functions, and more functions"
            },
            {
                "question": "____ is a predefined formula that performs calculations by using specific values in a particular order.",
                "options": ["Script", "Function", "Sequence", "Algorithm"],
                "answer": "Function"
            },
            {
                "question": "____ provides a range of preset functions that encapsulate common formulas.",
                "options": ["Spreadsheet", "Template", "Formula library", "Database"],
                "answer": "Spreadsheet"
            },
            {
                "question": "____ are equations that perform calculations on values in your worksheet.",
                "options": ["Functions", "Operators", "Variables", "Sequences"],
                "answer": "Formulas"
            },
            {
                "question": "____ are the symbols that are used to specify the type of calculation that you want the formula to perform.",
                "options": ["Identifiers", "Parameters", "Operators", "Variables"],
                "answer": "Operators"
            },
            {
                "question": "____ is a presentation application used to create slides that may include text, bulleted lists, charts, graphics, tables, and more.",
                "options": ["Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint", "Microsoft Access"],
                "answer": "Microsoft PowerPoint"
            },
            {
                "question": "A place in MS PowerPoint that you add notes to each slide's content is known as:",
                "options": ["Footnote area", "Note area", "Slide comment", "Notes area"],
                "answer": "Notes area"
            },
            {
                "question": "Slide sorter view is commonly used to:",
                "options": ["Review formatting", "Add transitions", "Delete slides, rearrange slides, cut, copy, or paste slides", "Change slide themes"],
                "answer": "Delete slides, rearrange slides, cut, copy, or paste slides"
            },
            {
                "question": "Every PowerPoint is composed of a series of ____.",
                "options": ["Slides", "Pages", "Panels", "Tiles"],
                "answer": "Slides"
            },
            {
                "question": "To convert a presentation in PowerPoint, you:",
                "options": ["Go to File tab, click Convert, and then Save", "Go to Review tab, click Convert, and then Save", "Go to Home tab, click Convert, and then Save", "Go to File tab, click Export, and then Save"],
                "answer": "Go to File tab, click Export, and then Save"
            },
            {
                "question": "To start a slideshow in PowerPoint, press:",
                "options": ["F5", "Shift + F5", "Ctrl + F5", "Alt + F5"],
                "answer": "F5"
            },
            {
                "question": "____ is an application used to create, manage, and share databases.",
                "options": ["Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint", "Microsoft Access"],
                "answer": "Microsoft Access"
            },
            {
                "question": "A field is:",
                "options": ["A collection of related records", "A category of information", "A combination of characters", "A single piece of information"],
                "answer": "A single piece of information"
            },
            {
                "question": "____ is a predefined collection of fields, tables, and relationships.",
                "options": ["Database schema", "Database query", "Database design", "Database template"],
                "answer": "Database template"
            },
            {
                "question": "____ view displays the structure of your database in a graphical way, showing tables, fields, and relationships.",
                "options": ["Table view", "Datasheet view", "Design view", "Relationship view"],
                "answer": "Design view"
            },
            {
                "question": "____ is a feature that allows you to filter the data you see in a table by setting criteria based on the contents of fields.",
                "options": ["Sorting", "Querying", "Filtering", "Searching"],
                "answer": "Filtering"
            },
            {
                "question": "____ is a structured method for naming and organizing computer files and software projects.",
                "options": ["File management", "Folder organization", "Data structuring", "File hierarchy"],
                "answer": "File hierarchy"
            },
            {
                "question": "A filename can be composed of a name and an extension separated by a dot. The extension is:",
                "options": ["The type of file", "The size of the file", "The date of creation", "The location of the file"],
                "answer": "The type of file"
            },
            {
                "question": "____ is a process of dividing a hard disk into several small partitions.",
                "options": ["Formatting", "Partitioning", "Fragmentation", "Compacting"],
                "answer": "Partitioning"
            },
            {
                "question": "____ is a utility software that locates and eliminates unnecessary fragments in the hard drive.",
                "options": ["Disk Cleanup", "Disk Defragmenter", "Disk Partitioner", "Disk Analyzer"],
                "answer": "Disk Defragmenter"
            },
            {
                "question": "____ is a graphical representation of the hierarchical structure of files in a computer, allowing you to see and access files, folders, and drives.",
                "options": ["File hierarchy", "Disk map", "File explorer", "Disk structure"],
                "answer": "File hierarchy"
            },
            {
                "question": "____ is a small, specialized software program that allows communication between software and hardware.",
                "options": ["Application software", "Driver", "Operating system", "Firmware"],
                "answer": "Driver"
            },
            {
                "question": "A device manager is used to:",
                "options": ["Manage connected devices like printers and scanners", "Control the overall functioning of the computer", "Handle system updates and security", "Monitor disk space and memory usage"],
                "answer": "Manage connected devices like printers and scanners"
            },
            {
                "question": "____ is a set of programs that act as an interface between the user and the computer hardware, providing a user-friendly environment.",
                "options": ["Application software", "Device driver", "Operating system", "Utility software"],
                "answer": "Operating system"
            },
            {
                "question": "____ is a type of software that controls and manages the basic operations of a computer, such as booting up, shutting down, and file management.",
                "options": ["Application software", "Device driver", "Operating system", "Utility software"],
                "answer": "Operating system"
            },
            {
                "question": "____ is a system software responsible for managing computer hardware and software resources and providing various services for computer programs.",
                "options": ["Device manager", "Operating system", "Utility manager", "Driver manager"],
                "answer": "Operating system"
            },
            {
                "question": "____ is a software that acts as an intermediary between the user and the computer hardware, providing a user interface and controlling hardware resources.",
                "options": ["Device manager", "Operating system", "Utility manager", "Driver manager"],
                "answer": "Operating system"
            },
            {
                "question": "A programming language translator that translates high-level programming languages into machine language is a:",
                "options": ["Compiler", "Interpreter", "Assembler", "Debugger"],
                "answer": "Compiler"
            },
            {
                "question": "____ is a programming language translator that translates and executes code line by line.",
                "options": ["Compiler", "Interpreter", "Assembler", "Debugger"],
                "answer": "Interpreter"
            },
            {
                "question": "____ is a programming language translator that translates assembly language code into machine code.",
                "options": ["Compiler", "Interpreter", "Assembler", "Debugger"],
                "answer": "Assembler"
            },
            {
                "question": "____ is a tool that helps identify and eliminate errors in a computer program.",
                "options": ["Compiler", "Interpreter", "Assembler", "Debugger"],
                "answer": "Debugger"
            },
            {
                "question": "The primary purpose of ____ is to provide functionality and support services that allow other programs to run.",
                "options": ["Application software", "System software", "Utility software", "Operating system"],
                "answer": "System software"
            },
            {
                "question": "____ is a type of software designed to perform a specific task or set of tasks for end-users.",
                "options": ["Application software", "System software", "Utility software", "Operating system"],
                "answer": "Application software"
            },
            {
                "question": "____ is a type of software that provides additional functionality to the operating system, such as antivirus programs and disk cleanup utilities.",
                "options": ["Application software", "System software", "Utility software", "Operating system"],
                "answer": "Utility software"
            },
            {
                "question": "____ is a type of software that is essential for the functioning of a computer, managing hardware resources and providing basic services.",
                "options": ["Application software", "System software", "Utility software", "Operating system"],
                "answer": "Operating system"
            }

    ];





  // Randomize questions
  const shuffledQuestions = originalQuestions.sort(() => Math.random() - 0.5);
  const questions = shuffledQuestions.slice(0, maxQuestions);
  

  let currentQuestionIndex = 0;
  let score = 0;
  let failedQuestions = [];

  const quizContainer = document.getElementById("quiz-container");
  const scoreElement = document.getElementById("score");
  const failedQuestionsElement = document.getElementById("failed-questions");
  const passMessageElement = document.getElementById("pass-message");

  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
  
    const questionNumberElement = document.getElementById("questionNumber");
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1} / 35`;
    questionNumberElement.style.display = "block";
    document.getElementById("score").style.display = "none";
    document.getElementById("failed-questions").style.display = "none";
    document.getElementById("pass-message").style.display = "none";
  
    document.getElementById("question").textContent = currentQuestion.question;
  
    currentQuestion.options.forEach((option) => {
      const optionElement = document.createElement("div");
      optionElement.textContent = option;
      optionElement.classList.add("option");
      optionElement.addEventListener("click", () => checkAnswer(optionElement, option));
      optionsContainer.appendChild(optionElement);
    });
  }



  function checkAnswer(selectedOptionElement, selectedOption) {
      const currentQuestion = questions[currentQuestionIndex];

      const options = document.querySelectorAll(".option");
      options.forEach((option) => {
        option.style.pointerEvents = "none"; // Disable further clicks after an answer is selected
      });

      // Highlight correct and incorrect answers
      currentQuestion.options.forEach((option, index) => {
        const optionElement = options[index];
        if (option === currentQuestion.answer) {
          optionElement.classList.add("correct");
        } else if (option === selectedOption) {
          optionElement.classList.add("incorrect");
        }
      });

      if (selectedOption === currentQuestion.answer) {
        score++;
      } else {
        failedQuestions.push(currentQuestionIndex);
      }

      // Check if it's the last question
      if (currentQuestionIndex === questions.length - 1) {
        showScore();
      } else {
        currentQuestionIndex++;
        setTimeout(showQuestion, 1000);
      }
    }






  function showScore() {
    document.getElementById("questionNumber").remove();
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    // Remove the last question element from the DOM
    const questionElement = document.getElementById("question");
    questionElement.parentNode.removeChild(questionElement);
    

    if (score >= Math.ceil(questions.length / 2)) {
      document.getElementById("pass-message").textContent = "Congratulations! You passed the test!";
      document.getElementById("pass-message").style.display = "block";
    } else {
      document.getElementById("failed-questions").textContent = "Sorry, you did not pass the test. Better luck next time!";
      document.getElementById("failed-questions").style.display = "block";
    }

    const adjustedScore = score / maxQuestions; // Double the final score
    document.getElementById("score").textContent = `Your Score: ${adjustedScore * 70}/${70}`;
    document.getElementById("score").style.display = "block";
  }

  showQuestion();
});
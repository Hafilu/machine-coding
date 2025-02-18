export const fileSystem = [
    {
      name: "Documents",
      isFolder: true,
      id: 1,
      children: [
        { name: "Resume.pdf", isFolder: false, id: 2 },
        { name: "Project", isFolder: true, id: 3, children: [
            { name: "index.js", isFolder: false, id: 4 },
            { name: "styles.css", isFolder: false, id: 5 }
          ]
        }
      ]
    },
    {
      name: "Photos",
      isFolder: true,
      id: 6,
      children: [
        { name: "Vacation", isFolder: true, id: 7, children: [
            { name: "beach.jpg", isFolder: false, id: 8 },
            { name: "mountain.jpg", isFolder: false, id: 9 }
          ]
        }
      ]
    },
    { name: "notes.txt", isFolder: false, id: 10 }
  ];
 
  
const data = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "Public",
      isFolder: true,
      items: [
        {
          name: "Public-Nested-Folder",
          isFolder: true,
          items: [
            { name: "index.html", isFolder: false },
            {
              name: "hello.html",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      name: "Public-Nested-File",
      isFolder: false,
    },
    {
      name: "src",
      isFolder: true,
      items: [
        { name: "hello.html", isFolder: false },
        {
          name: "Folder1",
          isFolder: true,
          items: [{ name: "f1", isFolder: false }],
        },
      ],
    },
  ],
};

export default data;

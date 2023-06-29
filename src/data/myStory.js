const story = [
    // This is page a
    {
      id: "a",
      content: "You are standing before a great dark forest. Choose where to go",
      links: [
        {
          label: "North",
          target: "b",
        },
        {
          label: "South",
          target: "b",
        },
        {
          label: "East",
          target: "b",
        },
        {
          label: "West",
          target: "b",
        },
      ],
    },
  
    // this is page b
    {
      id: "b",
      content: "You are standing before a sea",
      links: [
        {
          label: "North",
          target: "a",
        },
        {
          label: "East",
          target: "a",
        },
      ],
    },
  ];


export default story 
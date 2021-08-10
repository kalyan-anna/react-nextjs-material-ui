const mockEstablishments: any = [
  {
    id: "111",
    name: "Motion Microsystems",
    desc: "blah blah blab",
    image: "/pic.png",
    stallNumber: "A001",
  },
  {
    id: "222",
    name: "Hook Electronics",
    desc: "blah blah blab",
    image: "/pic.png",
    stallNumber: "A011",
  },
  {
    id: "323",
    name: "Oceanstone",
    desc: "blah blah blab",
    image: "/pic.png",
    stallNumber: "A013",
  },
  {
    id: "414",
    name: "Oceanstone",
    desc: "blah blah blab",
    image: "/pic.png",
    stallNumber: "A023",
  },
  {
    id: "565",
    name: "Corespace",
    desc: "blah blah blab",
    image: "/pic.png",
    stallNumber: "A033",
  },
  {
    id: "674",
    name: "Silver Coms",
    desc: "blah blah blab",
    image: "/pic.png",
    stallNumber: "A043",
  },
  {
    id: "793",
    name: "Silver Coms",
    desc: "blah blah blab",
    image: "/pic.png",
    stallNumber: "A121",
  },
  {
    id: "822",
    name: "Electrorks",
    desc: "blah blah blab",
    image: "/pic.png",
    stallNumber: "B043",
  },
  {
    id: "928",
    name: "Joyforce",
    desc: "blah blah blab",
    image: "/pic.png",
    stallNumber: "B013",
  },
  {
    id: "103",
    name: "Jetechnologies",
    desc: "blah blah blab",
    image: "/pic.png",
    stallNumber: "C027",
  },
];

const loadEstablishments = () => {
  return new Promise((resole) => {
    setTimeout(() => {
      resole(mockEstablishments);
    }, 3000);
  });
};

export const expoService = {
  loadEstablishments,
};

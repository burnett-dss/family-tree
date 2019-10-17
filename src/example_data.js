let data = [

    // This the object that represents you:

    {
        id: "Me",
        gender: "male",
        parents: [
            {
                id: "Dad",
            },
            {
                id: "Mom",
            }
        ],
        children: [],
        sibling: [
            {
                id: "John",
            },
            {
                id: "Susan",
            },
            {
                id: "Noel",
            }
        ],
        spouses: [],
        bio: "I'm you."
    },

    // The next two objects are your parents:

    {
        id: "Dad",
        gender: "male",
        parents: [],
        children: [
            {
                id: "Me",
            },
            {
                id: "John",
            },
            {
                id: "Susan",
            },
            {
                id: "Noel",
            }
        ],
        siblings: [],
        spouses: [
            {
                id: "Mom",
            }
        ],
        bio: "I'm your dad."
    },
    {
        id: "Mom",
        gender: "female",
        parents: [],
        children: [
            {
                id: "Me",
            },
            {
                id: "John",
            },
            {
                id: "Susan",
            },
            {
                id: "Noel",
            }
        ],
        siblings: [],
        spouses: [
            {
                id: "Dad",
            }
        ],
        bio: "I'm your mom."
    },

    // These objects are your siblings:

    {
        id: "John",
        gender: "male",
        parents: [
            {
                id: "Dad",
            },
            {
                id: "Mom",
            }
        ],
        siblings: [
            {
                id: "Me",
            },
            {
                id: "Susan",
            },
            {
                id: "Noel",
            }
        ],
        spouses: [],
        children: [],
        bio: "I'm your brother."
    },
    {
        id: "Susan",
        gender: "female",
        parents: [
            {
                id: "Dad",
            },
            {
                id: "Mom",
            }
        ],
        siblings: [
            {
                id: "John",
            },
            {
                id: "Me",
            },
            {
                id: "Noel",
            }
        ],
        spouses: [],
        children: [],
        bio: "I'm your sister."
    },
    {
        id: "John",
        gender: "male",
        parents: [
            {
                id: "Dad",
            },
            {
                id: "Mom",
            }
        ],
        children: [],
        siblings: [
            {
                id: "Noel",
            },
            {
                id: "Me",
            },
            {
                id: "Susan",
            }
        ],
        spouses: [],
        bio: "I'm your other brother."
    },
    {
        id: "Noel",
        gender: "male",
        parents: [
            {
                id: "Dad",
            },
            {
                id: "Mom",
            }
        ],
        siblings: [
            {
                id: "Me",
            },
            {
                id: "Susan",
            },
            {
                id: "John",
            }
        ],
        spouses: [],
        children: [],
        bio: "I'm your brother."
    },
];

export default data;
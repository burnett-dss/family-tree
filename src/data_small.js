let data = [
    {
        label: "Y",
        id: "Me",
        gender: "male",
        parents: [
            {
                id: "Dad",
                type: "blood"
            },
            {
                id: "Mom",
                type: "blood"
            }
        ],
        children: [],
        sibling: [
            {
                id: "John",
                type: "blood"
            },
            {
                id: "Susan",
                type: "blood"
            },
            {
                id: "Noel",
                type: "blood"
            }
        ],
        spouses: [],
        bio: "I'm you."
    },
    {
        label: "D",
        id: "Dad",
        gender: "male",
        parents: [],
        children: [
            {
                id: "Me",
                type: "blood"
            },
            {
                id: "John",
                type: "blood"
            },
            {
                id: "Susan",
                type: "blood"
            },
            {
                id: "Noel",
                type: "blood"
            }
        ],
        siblings: [],
        spouses: [
            {
                id: "Mom",
                type: "married"
            }
        ],
        bio: "I'm your dad."
    },
    {
        label: "M",
        id: "Mom",
        gender: "female",
        parents: [],
        children: [
            {
                id: "Me",
                type: "blood"
            },
            {
                id: "John",
                type: "blood"
            },
            {
                id: "Susan",
                type: "blood"
            },
            {
                id: "Noel",
                type: "blood"
            }
        ],
        siblings: [],
        spouses: [
            {
                id: "Dad",
                type: "married"
            }
        ],
        bio: "I'm your mom."
    },
    {
        label: "B",
        id: "John",
        gender: "male",
        parents: [
            {
                id: "Dad",
                type: "blood"
            },
            {
                id: "Mom",
                type: "blood"
            }
        ],
        siblings: [
            {
                id: "Me",
                type: "blood"
            },
            {
                id: "Susan",
                type: "blood"
            },
            {
                id: "Noel",
                type: "blood"
            }
        ],
        spouses: [],
        children: [],
        bio: "I'm your brother."
    },
    {
        label: "S",
        id: "Susan",
        gender: "female",
        parents: [
            {
                id: "Dad",
                type: "blood"
            },
            {
                id: "Mom",
                type: "blood"
            }
        ],
        siblings: [
            {
                id: "John",
                type: "blood"
            },
            {
                id: "Me",
                type: "blood"
            },
            {
                id: "Noel",
                type: "blood"
            }
        ],
        spouses: [],
        children: [],
        bio: "I'm your sister."
    },
    {
        label: "B",
        id: "John",
        gender: "male",
        parents: [
            {
                id: "Dad",
                type: "blood"
            },
            {
                id: "Mom",
                type: "blood"
            }
        ],
        children: [],
        siblings: [
            {
                id: "Noel",
                type: "blood"
            },
            {
                id: "Me",
                type: "blood"
            },
            {
                id: "Susan",
                type: "blood"
            }
        ],
        spouses: [],
        bio: "I'm your other brother."
    },
    {
        label: "B",
        id: "Noel",
        gender: "male",
        parents: [
            {
                id: "Dad",
                type: "blood"
            },
            {
                id: "Mom",
                type: "blood"
            }
        ],
        siblings: [
            {
                id: "Me",
                type: "blood"
            },
            {
                id: "Susan",
                type: "blood"
            },
            {
                id: "John",
                type: "blood"
            }
        ],
        spouses: [],
        children: [],
        bio: "I'm your brother."
    },
];

export default data;
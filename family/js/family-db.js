const fn = {
  null: "--",

  abreu: "Abreu",
  acosta: "Acosta",
  albayaty: "Albayaty",
  almanzar: "Almánzar",
  alvarez: "Álvarez",
  arias: "Arias",
  ariza: "Ariza",

  batista: "Batista",

  caba: "Caba",
  castillo: "Castillo",
  chimalpopoca: "Chimalpopoca",
  colon: "Colon",
  contreras: "Contreras",
  corporan: "Corporan",
  cruz: "Cruz",

  deazua: "De Azua",
  delacruz: "De La Cruz",
  delafuente: "De la Fuente",
  delain: "Delain",
  diaz: "Díaz",
  difo: "Difó",
  done: "Doñe",
  dominguez: "Dominguez",

  escobosa: "Escobosa",
  estevez: "Estevez",

  fabian: "Fabian",
  fabre: "Fabre",
  felix: "Félix",
  florentino: "Florentino",

  grullon: "Grullón",
  gutierrez: "Gutiérrez",

  hernandez: "Hernández",

  infante: "Infante",

  jerez: "Jerez",
  jimenez: "Jimenez",

  laureano: "Laureano",
  lescay: "Lescay",
  lespin: "Lespin",
  liz: "Liz",
  lugo: "Lugo",
  luna: "Luna",

  malony: "Malony",
  marte: "Marte",
  martinez: "Martínez",
  matias: "Matías",
  mejia: "Mejía",
  medrano: "Medrano",
  mendoza: "Mendoza",
  minaya: "Minaya",
  molina: "Molina",
  mueses: "Mueses",
  munoz: "Muñoz",

  nunez: "Nuñez",

  olivares: "Olivares",

  parra: "Parra",
  perez: "Perez",
  pena: "Peña",
  piantini: "Piantini",
  pina: "Piña",
  polanco: "Polanco",

  ramirez: "Ramirez",
  rivas: "Rivas",
  roa: "Roa",
  roman: "Roman",
  rodriguez: "Rodriguez",
  rosario: "Rosario",

  sabino: "Sabino",
  sanchez: "Sanchez",
  santos: "Santos",
  segura: "Segura",
  solis: "Solis",
  suero: "Suero",

  tejada: "Tejada",
  tejeda: "Tejeda",
  tavarez: "Tavarez",
  taveraz: "Taveraz",
  torres: "Torres",
  tuletta: "Tuletta",

  villar: "Villar",
};

export let globalIDcount = 0;
const ID = () => {
  globalIDcount++;
  return { data_id: `id-${globalIDcount}` };
}

const ghost = (name) => {
  return `(${name})`
};

const rp = {
  fernandoRivas: {
    ...ID(),
    name: ["Fernando", "Euclides"],
    familyName: [fn.rivas, fn.ramirez],
    nickname: "Nano",
  },
  carmenSantos: {
    ...ID(),
    name: ["María", "Del Carmen"],
    familyName: [fn.santos, fn.ramirez],
  },
  virgiliaRamirez: {
    ...ID(),
    name: ["Ana", "Virgilia"],
    familyName: [fn.ramirez, fn.mendoza],
    nickname: "Virginia",
  },
  pedroRivas: {
    ...ID(),
    name: ["Pedro", "Antonio"],
    familyName: [fn.rivas, fn.ramirez],
  },
  anaRita: {
    ...ID(),
    name: ["Ana", "Rita"],
    familyName: [fn.rivas, fn.ramirez],
  },
  pedroRamirezGrullon: {
    ...ID(),
    name: ["Pedro", "Antonio"],
    familyName: [fn.ramirez, fn.grullon],
  },
  amableRamirez: {
    ...ID(),
    name: ["Amable"],
    familyName: [fn.ramirez, fn.rivas],
  },
  trinaRamirez: {
    ...ID(),
    name: ["Ana", "Trinidad"],
    familyName: [fn.ramirez, fn.mendoza],
    nickname: "Trina",
  },
  antoniaRamirez: {
    ...ID(),
    name: ["Antonia"],
    familyName: [fn.ramirez, fn.rivas],
  },
  alcidesRamirez: {
    ...ID(),
    name: ["Alcides", "Guadalupe"],
    familyName: [fn.ramirez, fn.mendoza],
  }
};

const fernandoRivasChildren = [
  {
    ...ID(),
    name: ["Rocio", "Cristal"],
    familyName: [fn.rivas, fn.santos],
    children: [
      {
        ...ID(),
        group: "pareja",
        name: ["Fernando",],
        familyName: [fn.estevez],
        children: [
          {
            ...ID(),
            name: ["Shadday", "Noemi"],
            familyName: [fn.estevez, fn.rivas],
          }
        ]
      },
      {
        ...ID(),
        group: "pareja",
        name: ["Juan", "Carlos"],
        familyName: [fn.ariza],
        children: [
          {
            ...ID(),
            name: ["Adrian", "Alejandro"],
            familyName: [fn.ariza, fn.rivas],
          }
        ]
      },
    ]
  },
  {
    ...ID(),
    name: ["Angel", "Francisco"],
    familyName: [fn.rivas, fn.santos],
    children: [
      {
        ...ID(),
        group: "pareja",
        name: ["Yeimi", "Del Carmen"],
        preferedName: "Yeimi",
        familyName: [fn.tejada],
        children: [
          {
            ...ID(),
            name: ["Ivette"],
            familyName: [fn.rivas, fn.tejada],
          }
        ],
      }
    ]
  },
  {
    ...ID(),
    name: ["Jesus", "Miguel"],
    familyName: [fn.rivas, fn.santos],
  },
];

const virgiliaRamirezChildren = [
  {
    ...rp.fernandoRivas,
    children: [
      {
        group: "pareja",
        ...rp.carmenSantos,
        children: fernandoRivasChildren,
      }
    ]
  },
  {
    ...ID(),
    name: ["Pedro", "Antonio"],
    familyName: [fn.rivas, fn.ramirez],
    children: [
      {
        ...ID(),
        group: "pareja",
        name: [],
        familyName: [],
        nickname: "Sobeyda",
        children: [
          {
            ...ID(),
            name: ["Alondra"],
            familyName: [fn.rivas],
          },
          {
            ...ID(),
            name: ["Miguel", "Angel"],
            familyName: [fn.rivas],
          },
          {
            ...ID(),
            name: ["Marc"],
            familyName: [fn.rivas],
          },
        ]
      },
      {
        ...ID(),
        group: "pareja",
        name: ["Judith"],
        familyName: [fn.malony],
        children: [
          {
            ...ID(),
            name: ["Angelina"],
            familyName: [fn.rivas],
          },
          {
            ...ID(),
            name: ["Samantha"],
            familyName: [fn.rivas],
          },
        ]
      },
    ]
  },
  {
    ...ID(),
    name: ["David"],
    familyName: [fn.rivas, fn.ramirez],
    children: [
      {
        ...ID(),
        group: "pareja",
      }
    ]
  },
  {
    ...ID(),
    name: ["Miguel", "Angel"],
    familyName: [fn.rivas, fn.ramirez],
  },
  {
    ...ID(),
    name: ["Ana", "Virgilia"],
    familyName: [fn.rivas, fn.ramirez],
    nickname: "Estrella",
    children: [
      {
        ...ID(),
        group: "pareja",
        name: ["Roberto"],
        familyName: [fn.roa],
        children: [
          {
            ...ID(),
            group: "asociado",
            name: ["Joseph"],
            familyName: [fn.roa]
          },
          {
            ...ID(),
            name: ["Annie"],
            familyName: [fn.roa, fn.rivas],
            children: [
              {
                ...ID(),
                group: "pareja",
                name: ["Ben"],
                familyName: [fn.albayaty],
                children: [
                  {
                    ...ID(),
                    name: ["Ellie"],
                    familyName: [fn.albayaty, fn.roa],
                  }
                ]
              }
            ]
          },
          {
            ...ID(),
            name: ["Virginia"],
            familyName: [fn.roa, fn.rivas],
          },
          {
            ...ID(),
            name: ["Robert"],
            familyName: [fn.roa, fn.rivas],
          },
        ]
      },
    ]
  },
  {
    ...ID(),
    name: ["Ana", "Violeta"],
    familyName: [fn.rivas, fn.ramirez],
    children: [
      {
        ...ID(),
        group: "pareja",
        name: ["Joan"],
        familyName: [fn.medrano],
        children: [
          {
            ...ID(),
            name: ["Naia"],
            familyName: [fn.medrano, fn.rivas],
          },
          {
            ...ID(),
            name: ["Alaia"],
            familyName: [fn.medrano, fn.rivas],
          },
        ]
      }
    ]
  },
  {
    ...ID(),
    group: "asociado",
    name: ["María", "de Los Angeles"],
    familyName: [fn.pena],
  },
];

const anaRitaChildren = [
  {
    ...ID(),
    name: ["Juan", "Alonzo"],
    familyName: [fn.ramirez, fn.rivas],
  },
  {
    ...ID(),
    name: ["Leonora"],
    nickname: "Nona",
    familyName: [fn.ramirez, fn.rivas],
  },
];

const trinaRamirezChildren = [
  {
    ...ID(),
    name: ["Lissette", "Altagracia"],
    familyName: [fn.ramirez, fn.ramirez],
    children: [
      {
        ...ID(),
        group: "pareja",
        name: ["Eddy"],
        familyName: [],
        children: [
          {
            ...ID(),
            name: ["Enmanuel"],
            familyName: [fn.null, fn.ramirez],
          },
          {
            ...ID(),
            name: ["Edilí"],
            familyName: [fn.null, fn.ramirez],
          },
        ],
      }
    ],
  },
  {
    ...ID(),
    name: ["Amaury", "Germán"],
    familyName: [fn.ramirez, fn.ramirez],
    children: [
      {
        ...ID(),
        group: "pareja",
        name: ["Ana", "Lucinda"],
        nickname: "Lucy",
        familyName: [fn.rodriguez, fn.felix],
        children: [
          {
            ...ID(),
            name: ["Jacob"],
            familyName: [fn.ramirez, fn.rodriguez],
          },
          {
            ...ID(),
            name: ["Aaron", "Emil"],
            familyName: [fn.ramirez, fn.rodriguez],
          },
        ],
      }
    ],
  },
  {
    ...ID(),
    group: "asociado",
    name: ["Miriam"],
    nickname: "Mary",
    familyName: [fn.ramirez],
    children: [
      {
        ...ID(),
        group: "pareja",
        name: ["Teófilo"],
        nickname: "Teo",
        familyName: [fn.taveraz],
        children: [
          {
            name: ["Melissa"],
            familyName: [fn.taveraz, fn.ramirez],
          },
          {
            name: ["Alexander"],
            familyName: [fn.taveraz, fn.ramirez],
          },
          {
            name: ["Angel", "David"],
            familyName: [fn.taveraz, fn.ramirez],
          },
        ]
      }
    ]
  }

];

const alcidesRamirezChildren = [
  {
    ...ID(),
    name: ["Arnaldo"],
    familyName: [fn.ramirez, fn.ramirez],
  },
  {
    ...ID(),
    name: ["Sarah"],
    familyName: [fn.ramirez, fn.ramirez],
    children: [
      {
        familyName: [fn.caba],
        children: [
          {
            name: ["Ernesto", "Ariel"],
            familyName: [fn.caba, fn.ramirez]
          },
          {
            name: ["Wendy", "Noelia"],
            familyName: [fn.caba, fn.ramirez]
          },
        ]
      }
    ]
  },
  {
    ...ID(),
    name: ["Carmen", "Elsa"],
    familyName: [fn.ramirez, fn.ramirez],
    children: [
      {
        ...ID(),
        group: "pareja",
        name: [],
        familyName: [fn.martinez],
        children: [
          {
            ...ID(),
            name: ["Danel"],
            familyName: [fn.martinez, fn.ramirez],
          }
        ]
      }
    ]
  },
  {
    ...ID(),
    name: ["Luz", "Del Alba"],
    familyName: [fn.ramirez, fn.ramirez],
    nickname: "Muñeca",
  },
  {
    ...ID(),
    name: ["José", "Rafael"],
    familyName: [fn.ramirez, fn.ramirez],
    nickname: "Felo",
    children: [
      {
        ...ID(),
        group: "pareja",
        name: ["Jossie"],
        familyName: [fn.piantini],
        children: [
          {
            ...ID(),
            name: ["Kisayris"],
            familyName: [fn.ramirez, fn.piantini],
          },
          {
            ...ID(),
            name: ["Josue", "Rafael"],
            familyName: [fn.ramirez, fn.piantini],
            children: [
              {
                ...ID(),
                group: "pareja",
                name: ["Lidia"],
                familyName: [fn.castillo],
                children: [
                  {
                    ...ID(),
                    name: ["Gabriela"],
                    familyName: [fn.ramirez, fn.castillo]
                  }
                ]
              }
            ]
          },
          {
            ...ID(),
            name: ["Carlos"],
            familyName: [fn.ramirez, fn.piantini],
          },
          {
            ...ID(),
            name: ["Nathalie"],
            familyName: [fn.ramirez, fn.piantini],
          },
          {
            ...ID(),
            name: ["Priscila"],
            familyName: [fn.ramirez, fn.piantini],
          },
          {
            ...ID(),
            name: ["Mónica"],
            familyName: [fn.ramirez, fn.piantini],
          },
        ]
      }
    ],
  },
];

export let familyDB = {
  ...ID(),
  name: ["Pedro", "Antonio"],
  familyName: [fn.ramirez, fn.rivas],
  children: [
    {
      ...ID(),
      group: "pareja",
      name: ["Eleonora", "Del Carmen"],
      familyName: [fn.grullon],
      children: [
        {
          ...rp.pedroRamirezGrullon,
          children: [
            {
              group: "pareja",
              ...rp.anaRita,
              children: anaRitaChildren,
            },
            {
              ...ID(),
              group: "pareja",
              name: ["Emilia"],
              familyName: [ghost(fn.fabre), fn.mendoza],
              children: [
                {
                  ...rp.alcidesRamirez,
                  children: [
                    {
                      group: "pareja",
                      ...rp.antoniaRamirez,
                      children: alcidesRamirezChildren,
                    }
                  ]
                },
                {
                  ...ID(),
                  name: ["Ana", "Luz"],
                  familyName: [fn.ramirez, fn.mendoza],
                  nickname: "Tía Luz",
                },
                {
                  ...ID(),
                  name: ["Pedro", "Antonio"],
                  familyName: [fn.ramirez, fn.mendoza],
                  nickname: "Pepe",
                  children: [
                    {
                      ...ID(),
                      group: "pareja",
                      name: ["Valencia"],
                      familyName: [fn.perez],
                      children: [
                        {
                          ...ID(),
                          name: ["Yaquelin", "Helena"],
                          familyName: [fn.ramirez, fn.perez],
                        },
                        {
                          ...ID(),
                          name: ["Pedro"],
                          familyName: [fn.ramirez, fn.perez],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: [],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Liza"],
                                  familyName: [fn.ramirez],
                                },
                                {
                                  ...ID(),
                                  name: ["Miguel"],
                                  familyName: [fn.ramirez],
                                },
                                {
                                  ...ID(),
                                  name: ["Eric"],
                                  familyName: [fn.ramirez],
                                },
                              ],
                            }
                          ],
                        },
                        {
                          ...ID(),
                          name: ["Angela", "Altagracia"],
                          familyName: [fn.ramirez, fn.perez],
                        },
                        {
                          ...ID(),
                          name: ["Ursinio", "De Jesus"],
                          familyName: [fn.ramirez, fn.perez],
                        },
                      ],
                    }
                  ],
                },
                {
                  ...ID(),
                  name: ["Maria"],
                  familyName: [fn.ramirez, fn.mendoza],
                  nickname: "Maro",
                  children: [
                    {
                      ...ID(),
                      group: "pareja",
                      name: ["Nicolas"],
                      familyName: [fn.nunez, fn.escobosa],
                      children: [
                        {
                          ...ID(),
                          name: ["Eunice", "Del Carmen"],
                          familyName: [fn.nunez, fn.ramirez],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: [],
                              familyName: [fn.contreras],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Geraldine"],
                                  familyName: [fn.contreras, fn.nunez],
                                },
                                {
                                  ...ID(),
                                  name: ["Anderis"],
                                  familyName: [fn.contreras, fn.nunez],
                                  children: [
                                    {
                                      name: ["Emmanuel", "Antonio"],
                                      familyName: [fn.jerez, fn.rosario],
                                      children: [
                                        {
                                          name: ["Valentina"],
                                          familyName: [fn.jerez, fn.contreras]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Endira"],
                                  familyName: [fn.contreras, fn.nunez],
                                },
                              ]
                            }
                          ]
                        },
                        {
                          ...ID(),
                          name: ["Jose", "Luis"],
                          familyName: [fn.nunez, fn.ramirez],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: [],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Jocelyn"],
                                  familyName: [fn.nunez],
                                }
                              ],
                            },
                            {
                              ...ID(),
                              group: "pareja",
                              name: [],
                              familyName: [],
                              nickname: "Cruzita",
                              children: [
                                {
                                  ...ID(),
                                  name: ["Elizabeth"],
                                  familyName: [fn.nunez],
                                },
                                {
                                  ...ID(),
                                  name: ["Denisse"],
                                  familyName: [fn.nunez],
                                },
                                {
                                  ...ID(),
                                  name: ["Michelle"],
                                  familyName: [fn.nunez],
                                },
                              ]
                            }
                          ]
                        },
                        {
                          ...ID(),
                          name: ["Rosa", "Virginia"],
                          familyName: [fn.nunez, fn.ramirez],
                        },
                        {
                          ...ID(),
                          name: ["David"],
                          familyName: [fn.nunez, fn.ramirez],
                          children: [
                            {
                              children: [
                                {
                                  ...ID(),
                                  name: ["Disleidy"],
                                  familyName: [fn.nunez],
                                }
                              ]
                            }
                          ]
                        },
                      ]
                    }
                  ]
                },
                {
                  ...ID(),
                  name: ["America", "Ana"],
                  familyName: [fn.ramirez, fn.mendoza],
                  nickname: "Queca",
                  children: [
                    {
                      ...ID(),
                      group: "pareja",
                      name: ["Juan", "Ramon"],
                      familyName: [fn.santos, fn.jimenez],
                      children: [
                        {
                          ...rp.carmenSantos,
                          children: [
                            {
                              group: "pareja",
                              ...rp.fernandoRivas,
                              children: fernandoRivasChildren,
                            }
                          ]
                        },
                        {
                          ...ID(),
                          name: ["Maria", "Teresa"],
                          familyName: [fn.santos, fn.ramirez],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Mario", "Antonio"],
                              familyName: [fn.martinez],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Marioly", "Altagracia"],
                                  familyName: [fn.martinez, fn.santos],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: ["Carlos", "Manuel"],
                                      familyName: [fn.dominguez, fn.marte],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Laura"],
                                          familyName: [fn.dominguez, fn.martinez]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Jorge", "Luis"],
                                  familyName: [fn.martinez, fn.santos],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      // name: ["Lizz", "Katii"],
                                      familyName: [],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Jayliz"],
                                          familyName: [fn.martinez],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Jacob"],
                                          familyName: [fn.martinez],
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          ...ID(),
                          name: ["Jose", "Ricardo"],
                          familyName: [fn.santos, fn.ramirez],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Isis"],
                              familyName: [fn.santos],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Juan", "Anibal"],
                                  familyName: [fn.santos, fn.santos],
                                },
                                {
                                  ...ID(),
                                  name: ["Abel", "Ricardo"],
                                  familyName: [fn.santos, fn.santos],
                                },
                              ]
                            },
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Roodtz", "Emmanuela"],
                              familyName: [fn.delain],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Emma"],
                                  familyName: [fn.santos, fn.delain],
                                }
                              ]
                            },
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Dayse", "Lucia"],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Carlos", "David"],
                                  familyName: [fn.santos]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          ...ID(),
                          name: ["Faustino"],
                          familyName: [fn.santos, fn.ramirez],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Rosa", "Delia"],
                              familyName: [fn.sanchez],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Ana", "Bertilia"],
                                  familyName: [fn.santos, fn.sanchez],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: ["Ricardo"],
                                      familyName: [fn.mejia],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Cesar", "Ricardo"],
                                          familyName: [fn.mejia, fn.santos],
                                        }
                                      ]
                                    },
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: ["Luis", "Antonio"],
                                      familyName: [fn.pina],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Luis", "Antonio"],
                                          familyName: [fn.pina, fn.santos],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Montserrat"],
                                          familyName: [fn.pina, fn.santos],
                                        }
                                      ],
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Maritza"],
                              familyName: [fn.delacruz],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Rosemary"],
                                  familyName: [fn.santos, fn.delacruz],
                                }
                              ]
                            },
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Fior", "Daliza"],
                              familyName: [fn.torres],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Anabel"],
                                  familyName: [fn.santos, fn.torres],
                                  children: [
                                    {
                                      ...ID(),
                                      name: [],
                                      familyName: [fn.grullon, fn.santos],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Ryan", "Alejandro"],
                                          familyName: [fn.grullon, fn.santos],
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Doraluz"],
                              familyName: [fn.lespin],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Fausto", "Danel"],
                                  familyName: [fn.santos, fn.lespin],
                                },
                                {
                                  ...ID(),
                                  name: ["Sandy", "Noel"],
                                  familyName: [fn.santos, fn.lespin],
                                },
                                {
                                  ...ID(),
                                  name: ["Jose", "Luis"],
                                  familyName: [fn.santos, fn.lespin],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          ...ID(),
                          name: ["Maria", "Elena"],
                          familyName: [fn.santos, fn.ramirez],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Sócrates", "Francisco"],
                              familyName: [fn.hernandez, fn.polanco],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Cinthya", "Leticia"],
                                  familyName: [fn.hernandez, fn.santos],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: ["Sergio"],
                                      familyName: [fn.delafuente, fn.chimalpopoca],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Sofia", 'Elena'],
                                          familyName: [fn.delafuente, fn.hernandez]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Juan", "Francisco"],
                                  familyName: [fn.hernandez, fn.santos],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: ["Dayanna"],
                                      familyName: [fn.fabian],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Juan", "David"],
                                          familyName: [fn.hernandez, fn.fabian],
                                        },
                                      ]
                                    },
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: ["Suleydi", "Del Carmen"],
                                      familyName: [fn.gutierrez, fn.colon],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Francisco", "Zavier"],
                                          familyName: [fn.hernandez, fn.gutierrez],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Juan", "Ramon"],
                                          familyName: [fn.hernandez, fn.gutierrez],
                                        },
                                      ]
                                    }
                                  ]
                                },
                              ]
                            },
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Olegario", "Carmen"],
                              familyName: [fn.villar],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Ramon", "Anibal"],
                                  familyName: [fn.villar, fn.santos],
                                }
                              ]
                            }
                          ]
                        },
                        {
                          ...ID(),
                          name: ["Maria", "Del Rosario"],
                          familyName: [fn.santos, fn.ramirez],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Victoriano"],
                              familyName: [fn.luna, fn.abreu],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Carolyn"],
                                  familyName: [fn.luna, fn.santos],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      // name: [],
                                      // familyName: [],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Gabriela"],
                                          familyName: [fn.parra, fn.luna],
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Jennifer", "Altagracia"],
                                  familyName: [fn.luna, fn.santos],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: ["Alexander", "Javier"],
                                      familyName: [fn.rivas, fn.taveraz],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Yuliani", "Del Rosario"],
                                          familyName: [fn.rivas, fn.luna],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Yulian", "Manuel"],
                                          familyName: [fn.rivas, fn.luna],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Juliette", "Altagracia"],
                                          familyName: [fn.rivas, fn.luna],
                                        },
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Victor", "Manuel"],
                                  familyName: [fn.luna, fn.santos],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: ["Lledilly"],
                                      familyName: [fn.sabino],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Nashla", "Marie"],
                                          familyName: [fn.luna, fn.sabino],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Yenevieth", "Del Rosario"],
                                          familyName: [fn.luna, fn.sabino],
                                        },
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Stalin"],
                                  familyName: [fn.luna, fn.santos],
                                },
                              ],
                            },
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Felix"],
                              familyName: [fn.segura],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Leanny", "Maria"],
                                  familyName: ['-' + fn.segura, fn.santos],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: ["Rocky", "Omar"],
                                      familyName: [fn.sanchez, fn.ramirez],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Ashley"],
                                          familyName: [fn.sanchez, fn.santos],
                                        },
                                      ]
                                    },
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: ["Omar", "De Jesús"],
                                      familyName: [fn.infante, fn.almanzar],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Alejandro"],
                                          familyName: [fn.infante, fn.santos],
                                        }
                                      ]
                                    }
                                  ]
                                },
                              ],
                            }
                          ]
                        },
                      ]
                    }
                  ]
                },
                {
                  ...rp.virgiliaRamirez,
                  children: [
                    {
                      group: "pareja",
                      ...rp.pedroRivas,
                      children: virgiliaRamirezChildren,
                    }
                  ]

                },
                {
                  ...ID(),
                  name: ["Ana", "Elvira"],
                  familyName: [fn.ramirez, fn.mendoza],
                  nickname: "Milita",
                  children: [
                    {
                      ...ID(),
                      group: "pareja",
                      name: ["Jose", "Rafael"],
                      familyName: [fn.acosta],
                      children: [
                        {
                          ...ID(),
                          name: ["Jose", "Rafael"],
                          familyName: ['-' + fn.acosta, fn.ramirez],
                          nickname: "Muma"
                        },
                        {
                          ...ID(),
                          name: ["Humberto"],
                          familyName: [fn.acosta, fn.ramirez],
                        },
                      ]
                    },
                    {
                      ...ID(),
                      group: "pareja",
                      name: ["Patricio"],
                      familyName: [fn.minaya],
                      children: [
                        {
                          ...ID(),
                          name: ["Lucía", "Del Carmen"],
                          familyName: [fn.minaya, fn.ramirez],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Antonio", "De Jesús"],
                              nickname: "Tono",
                              familyName: [fn.molina, fn.diaz],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Emely", "Del Rosario"],
                                  familyName: [fn.molina, fn.minaya],
                                },
                                {
                                  ...ID(),
                                  name: ["Luanny"],
                                  familyName: [fn.molina, fn.minaya],
                                },
                                {
                                  ...ID(),
                                  name: ["Annie", "Carolina"],
                                  familyName: [fn.molina, fn.minaya],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: ["Edgar"],
                                      familyName: [fn.ramirez, fn.deazua],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Edgar", "Antonio"],
                                          familyName: [fn.ramirez],
                                        }
                                      ]
                                    }
                                  ]
                                },
                              ]
                            }
                          ],
                        },
                        {
                          ...ID(),
                          name: ["Lina", "Del Carmen"],
                          familyName: [fn.minaya, fn.ramirez],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Ramon"],
                              familyName: [fn.solis],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Esmeralda"],
                                  familyName: [fn.solis, fn.minaya],
                                  children: [
                                    {
                                      ...ID(),
                                      name: [],
                                      familyName: [fn.rodriguez],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Linabel"],
                                          familyName: [fn.rodriguez]
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Rubi"],
                                  familyName: [fn.solis, fn.minaya],
                                },
                                {
                                  ...ID(),
                                  name: ["Coral"],
                                  familyName: [fn.solis, fn.minaya],
                                },
                              ]
                            }
                          ],
                        },
                        {
                          ...ID(),
                          name: ["Arturo"],
                          familyName: [fn.minaya, fn.ramirez],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Ana", "Isabel"],
                              familyName: [fn.molina, fn.diaz],
                              nickname: "Chabela",
                              children: [
                                {
                                  ...ID(),
                                  name: ["Chabely"],
                                  familyName: [fn.minaya, fn.molina],
                                  children: [
                                    {
                                      ...ID(),
                                      name: ["Miguel"],
                                      familyName: [fn.roman],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Alexa", "Marie"],
                                          familyName: [fn.roman]
                                        },
                                        {
                                          ...ID(),
                                          name: ["Liam", "Alí"],
                                          familyName: [fn.roman]
                                        },
                                        {
                                          ...ID(),
                                          name: ["Mía", "Sophia"],
                                          familyName: [fn.roman]
                                        },
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Anabel"],
                                  familyName: [fn.minaya, fn.molina],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Tobías", "Arturo"],
                                          familyName: [fn.null, fn.molina],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Matías"],
                                          familyName: [fn.null, fn.molina],
                                        },
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Arturo"],
                                  familyName: [fn.minaya, fn.molina],
                                },
                                {
                                  ...ID(),
                                  name: ["Tommy"],
                                  familyName: [fn.minaya, fn.molina],
                                },
                              ]
                            }
                          ]
                        },
                        {
                          ...ID(),
                          group: "asociado",
                          name: ["Gabriel"],
                          familyName: [fn.minaya],
                        }
                      ]
                    }
                  ]
                },
                {
                  ...ID(),
                  name: ["Ana", "de las Nieves"],
                  familyName: [fn.ramirez, fn.mendoza],
                  nickname: "Nieves",
                  children: [
                    {
                      ...ID(),
                      group: "pareja",
                      name: ["Rhadames"],
                      familyName: [fn.castillo],
                      children: [
                        {
                          ...ID(),
                          name: ["Annie", "Maryem"],
                          nickname: "Maryem",
                          familyName: [fn.castillo, fn.ramirez],
                        },
                        {
                          ...ID(),
                          name: ["Niyra", "Raydhiris"],
                          preferedName: "Niyra",
                          familyName: [fn.castillo, fn.ramirez],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["José", "Manuel"],
                              familyName: [fn.lescay, fn.tejeda],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Emmanuel", "Alberto"],
                                  familyName: [fn.lescay, fn.castillo],
                                }
                              ]
                            }
                          ]
                        },
                      ]
                    }
                  ]
                },
                {
                  ...ID(),
                  name: ["Antonio"],
                  familyName: [fn.ramirez, fn.mendoza],
                  nickname: "Antonito",
                  children: [
                    {
                      ...ID(),
                      group: "pareja",
                      name: ["Ana", "Mercedez"],
                      familyName: [fn.difo],
                      children: [
                        {
                          ...ID(),
                          name: ["Joanna"],
                          familyName: [fn.ramirez, fn.difo],
                        },
                        {
                          ...ID(),
                          name: ["Pascal"],
                          familyName: [fn.ramirez, fn.difo],
                        },
                        {
                          ...ID(),
                          name: ["Lizandro"],
                          familyName: [fn.ramirez, fn.difo],
                        },
                      ]
                    }
                  ]
                },
                {
                  ...rp.trinaRamirez,
                  children: [
                    {
                      group: "pareja",
                      ...rp.amableRamirez,
                      children: trinaRamirezChildren,
                    }
                  ]
                },
                {
                  ...ID(),
                  name: ["Porfirio", "Antonio"],
                  familyName: [fn.ramirez, fn.mendoza],
                  children: [
                    {
                      ...ID(),
                      group: "pareja",
                      name: ["Esperanza"],
                      children: [
                        {
                          ...ID(),
                          name: ["Jasmin"],
                          familyName: [fn.ramirez],
                        }
                      ]
                    }
                  ]
                },
                {
                  ...ID(),
                  name: ["Jose", "Rafael"],
                  familyName: [fn.ramirez, fn.mendoza],
                  nickname: "Chepe",
                  children: [
                    {
                      ...ID(),
                      group: "pareja",
                      name: ["Sonia"],
                      familyName: [fn.arias],
                      children: [
                        {
                          ...ID(),
                          name: ["Marianne"],
                          familyName: [fn.ramirez, fn.arias],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Erasmo"],
                              nickname: "Willy",
                              familyName: [fn.done, fn.corporan],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Dylan", "Alexander"],
                                  familyName: [fn.done, fn.ramirez],
                                },
                              ]
                            }
                          ]
                        },
                        {
                          ...ID(),
                          name: ["Loly", "Anny"],
                          familyName: [fn.ramirez, fn.arias],
                        },
                      ]
                    }
                  ]
                },
                {
                  ...ID(),
                  name: ["Sergio"],
                  familyName: [fn.ramirez, fn.mendoza],
                },
              ]
            }
          ],
        },
        {
          ...ID(),
          name: ["Juan", "De Jesús"],
          familyName: [fn.ramirez, fn.grullon],
          children: [
            {
              ...ID(),
              group: "pareja",
              name: ["Merenciana"],
              nickname: ["Meren"],
              familyName: [fn.rivas, fn.perez],
              children: [
                {
                  ...ID(),
                  name: ["Percio"],
                  familyName: [fn.ramirez, fn.rivas],
                },
                {
                  ...rp.antoniaRamirez,
                  children: [
                    {
                      group: "pareja",
                      ...rp.alcidesRamirez,
                      children: alcidesRamirezChildren,
                    }
                  ]
                },
                {
                  ...ID(),
                  name: ["Ana", "Consuelo"],
                  familyName: [fn.ramirez, fn.rivas],
                },
                {
                  ...ID(),
                  name: ["Luz", "Del Alba"],
                  familyName: [fn.ramirez, fn.rivas],
                },
                {
                  ...ID(),
                  name: ["Juan", "Antonio"],
                  familyName: [fn.ramirez, fn.rivas],
                },
                {
                  ...ID(),
                  name: ["Gladis"],
                  familyName: [fn.ramirez, fn.rivas],
                },
                {
                  ...rp.amableRamirez,
                  children: [
                    {
                      group: "pareja",
                      ...rp.trinaRamirez,
                      children: trinaRamirezChildren,
                    }
                  ]
                },
              ]
            }
          ]
        },
        {
          ...ID(),
          name: ["Ana", "Julia"],
          familyName: [fn.ramirez, fn.grullon],
          nickname: "Mama Julia",
          children: [
            {
              ...ID(),
              group: "pareja",
              name: ["Fernando"],
              familyName: [fn.rivas, fn.perez],
              nickname: "Papá Nando",
              children: [
                {
                  ...ID(),
                  name: ["Ramon", "Antonio"],
                  familyName: [fn.rivas, fn.ramirez],
                  nickname: "Ramon Chiquito",
                  children: [
                    {
                      ...ID(),
                      group: "pareja",
                      name: ["Santos"],
                      familyName: [fn.jimenez],
                      children: [
                        {
                          ...ID(),
                          group: "asociado",
                          name: ["Águeda"],
                          familyName: [fn.batista],
                        },
                        {
                          ...ID(),
                          name: ["Máximo", "Alexis"],
                          familyName: [fn.rivas, fn.jimenez],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: [],
                              familyName: [fn.perez],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Elaine"],
                                  familyName: [fn.perez, fn.contreras]
                                },
                                {
                                  ...ID(),
                                  name: ["Denisse"],
                                  familyName: [fn.perez, fn.contreras]
                                },
                                {
                                  ...ID(),
                                  name: ["Jorge", "Máximo"],
                                  familyName: [fn.perez, fn.contreras]
                                },
                              ]
                            }
                          ]
                        },
                        {
                          ...ID(),
                          name: ["Fernando", "Donato"],
                          familyName: [fn.rivas, fn.jimenez],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: [],
                              familyName: [fn.alvarez],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Máximo", "Argenis"],
                                  familyName: [fn.rivas, fn.alvarez],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [fn.mueses],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Evaluna"],
                                          familyName: [fn.rivas, fn.mueses],
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Diana", "Leonor"],
                                  familyName: [fn.rivas, fn.alvarez],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [fn.cruz],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Owen"],
                                          familyName: [fn.cruz, fn.rivas],
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Isis", "Orquídea"],
                                  familyName: [fn.rivas, fn.alvarez],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [fn.sanchez],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Junior", "David"],
                                          familyName: [fn.sanchez, fn.rivas],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Liam", "Xavier"],
                                          familyName: [fn.sanchez, fn.rivas],
                                        },
                                      ]
                                    }
                                  ]
                                },
                              ]
                            },
                            {
                              ...ID(),
                              group: "pareja",
                              name: [],
                              familyName: [fn.rosario],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Fernando", "Alexis"],
                                  familyName: [fn.rivas, fn.rosario],
                                },
                                {
                                  ...ID(),
                                  name: ["Aldo", "Leonardo"],
                                  familyName: [fn.rivas, fn.rosario],
                                },
                                {
                                  ...ID(),
                                  name: ["Samantha", "Eileen"],
                                  familyName: [fn.rivas, fn.rosario],
                                },
                              ]
                            }
                          ]
                        },
                        {
                          ...ID(),
                          name: ["María", "Verónica"],
                          familyName: [fn.rivas, fn.jimenez],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: [],
                              familyName: [fn.liz],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Lenny", "Verónica"],
                                  familyName: [fn.liz, fn.rivas]
                                },
                                {
                                  ...ID(),
                                  name: ["Nathalie", "Francheska"],
                                  familyName: [fn.liz, fn.rivas]
                                },
                                {
                                  ...ID(),
                                  name: ["Elvis", "Valentín"],
                                  familyName: [fn.liz, fn.rivas]
                                },
                              ]
                            }

                          ]
                        },
                        {
                          ...ID(),
                          name: ["Juana", "Ramona"],
                          familyName: [fn.rivas, fn.jimenez],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Antonio"],
                              familyName: [fn.matias],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Navila", "Idermis"],
                                  familyName: [fn.matias, fn.rivas],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: ["Jarol"],
                                      familyName: [fn.tuletta, fn.arias],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Luca"],
                                          familyName: [fn.tuletta, fn.matias],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Sael"],
                                          familyName: [fn.tuletta, fn.matias],
                                        },
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Hansell", "Antonio"],
                                  familyName: [fn.matias, fn.rivas],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [],
                                      children: [
                                        {
                                          ...ID(),
                                          name: [],
                                          familyName: [fn.matias],
                                        }
                                      ],
                                    }
                                  ],
                                },
                                {
                                  ...ID(),
                                  name: ["Laura", "Massiel"],
                                  familyName: [fn.matias, fn.rivas],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [],
                                      children: [
                                        {
                                          ...ID(),
                                          name: [],
                                          familyName: [],
                                        }
                                      ],
                                    }
                                  ],
                                },
                              ]
                            }
                          ]
                        },
                        {
                          ...ID(),
                          name: ["Eleonora", "Del Carmen"],
                          familyName: [fn.rivas, fn.jimenez],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: [],
                              familyName: [fn.laureano],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Katherine"],
                                  familyName: [fn.laureano, fn.rivas],
                                }
                              ]
                            }
                          ]
                        },
                      ]
                    }
                  ]
                },
                {
                  ...ID(),
                  name: ["María", "Eleonora"],
                  familyName: [fn.rivas, fn.ramirez],
                  nickname: "Norita",
                },
                {
                  ...ID(),
                  name: ["Ana", "Virgilia"],
                  familyName: [fn.rivas, fn.ramirez],
                  children: [
                    {
                      ...ID(),
                      group: "pareja",
                      name: ["Americo"],
                      familyName: [fn.grullon],
                      children: [
                        {
                          ...ID(),
                          name: ["Manuel", "S"],
                          familyName: [fn.grullon],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Maria", "M"],
                              familyName: [fn.jimenez],
                              children: [
                                // {
                                //   ...ID(),
                                //   name: [],
                                //   familyName: [],
                                // }
                              ]
                            }
                          ]
                        },
                        {
                          ...ID(),
                          name: ["Santiago", "Alberto"],
                          familyName: [fn.grullon],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Sory"],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Johan", "Manuel"],
                                  familyName: [],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Johanly"],
                                          familyName: [],
                                        },
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Manuel", "Alberto"],
                                  familyName: [],
                                },
                                {
                                  ...ID(),
                                  name: ["Eliot"],
                                  familyName: [],
                                },
                                {
                                  ...ID(),
                                  name: ["Jennifer", "Maria"],
                                  familyName: [],
                                },
                                {
                                  ...ID(),
                                  name: ["Yaribel"],
                                  familyName: [],
                                },
                              ]
                            }
                          ]
                        },
                        {
                          ...ID(),
                          name: ["Americo", "Vladimir"],
                          familyName: [fn.grullon],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Yajaira"],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Amely"],
                                  familyName: [],
                                },
                                {
                                  ...ID(),
                                  name: ["Yamely"],
                                  familyName: [],
                                },
                                {
                                  ...ID(),
                                  name: ["Jamely"],
                                  familyName: [],
                                }
                              ]
                            }
                          ]
                        },
                        {
                          ...ID(),
                          name: ["Jose", "Manuel"],
                          familyName: [fn.grullon],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Grecia"],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Johan"],
                                  familyName: [],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Dairelys"],
                                          familyName: [],
                                        },
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Victor"],
                                  familyName: [],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Noemi"],
                                          familyName: [],
                                        },
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Yosmary"],
                                  familyName: [],
                                },
                                {
                                  ...ID(),
                                  name: ["Elvin"],
                                  familyName: [],
                                },
                              ]
                            }
                          ]
                        },
                        {
                          ...ID(),
                          name: ["Estervina"],
                          familyName: [fn.grullon],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: [],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Fernando"],
                                  familyName: [],
                                },
                                {
                                  ...ID(),
                                  name: ["Jose", "Yunior"],
                                  familyName: [],
                                },
                                {
                                  ...ID(),
                                  name: ["Maria", "Degni"],
                                  familyName: [],
                                },
                              ]
                            }
                          ]
                        },
                        {
                          ...ID(),
                          name: ["Gustavo"],
                          familyName: [fn.grullon],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Agustina"],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: [],
                                  familyName: [],
                                }
                              ]
                            }
                          ]
                        },
                        {
                          ...ID(),
                          name: ["Cristian"],
                          familyName: [fn.grullon],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: [],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Cristobel"],
                                  familyName: [],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Paulette"],
                                          familyName: [],
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Cristofer"],
                                  familyName: [],
                                },
                                {
                                  ...ID(),
                                  name: ["Crisbel"],
                                  familyName: [],
                                }
                              ]
                            }
                          ]
                        },
                        {
                          ...ID(),
                          name: ["Elvira"],
                          familyName: [fn.grullon],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Reinaldo"],
                              familyName: [],
                              children: [
                              ]
                            }
                          ]
                        },
                        {
                          ...ID(),
                          name: ["Gleny"],
                          familyName: [fn.grullon],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Manuel"],
                              familyName: [],
                              children: [
                              ]
                            }
                          ]
                        },
                        {
                          ...ID(),
                          name: ["Elvira"],
                          familyName: [fn.grullon],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Bryan"],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Edgar"],
                                  familyName: [],
                                },
                                {
                                  ...ID(),
                                  name: ["Bri-el"],
                                  familyName: [],
                                },
                              ]
                            }
                          ]
                        },


                        
                        {
                          ...ID(),
                          name: ["María", "Socorro"],
                          familyName: [fn.grullon],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Francisco", "Javier"],
                              familyName: [fn.molina],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Hugo", "Francisco"],
                                  familyName: [fn.molina, fn.grullon],
                                },
                                {
                                  ...ID(),
                                  name: ["Francisco"],
                                  nickname: "Franchi",
                                  familyName: [fn.molina, fn.grullon],
                                },
                              ]
                            }
                          ]
                        },
                      ]
                    }
                  ]
                },
                {
                  ...ID(),
                  name: ["Ana", "Rosa"],
                  familyName: [fn.rivas, fn.ramirez],
                },
                {
                  ...ID(),
                  name: ["Ana", "Rita"],
                  familyName: [fn.rivas, fn.ramirez],
                },
                {
                  ...ID(),
                  name: ["Juan", "Antonio"],
                  familyName: [fn.rivas, fn.ramirez],
                },
                {
                  ...ID(),
                  name: ["Ana", "Mercedes"],
                  familyName: [fn.rivas, fn.ramirez],
                  children: [
                    {
                      ...ID(),
                      group: "pareja",
                      name: ["Juan"],
                      familyName: [fn.lugo],
                      children: [
                        {
                          ...ID(),
                          name: ["Francia"],
                          familyName: [fn.lugo, fn.rivas],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Máximo"],
                              familyName: [],
                              children: []
                            },
                          ],
                        },
                        {
                          ...ID(),
                          name: ["Lupe"],
                          familyName: [fn.lugo, fn.rivas],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Percio"],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Lupercio"],
                                  familyName: [],
                                },
                                {
                                  ...ID(),
                                  name: ["Arnoldo"],
                                  familyName: [],
                                },
                                {
                                  ...ID(),
                                  name: ["Larry"],
                                  familyName: [],
                                },
                                {
                                  ...ID(),
                                  name: ["Nixaliz"],
                                  familyName: [],
                                },
                              ]
                            },
                          ],
                        },
                        {
                          ...ID(),
                          name: ["Juan"],
                          familyName: [fn.lugo, fn.rivas],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Hilda"],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Wanda"],
                                  familyName: [fn.lugo],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Matthew"],
                                          familyName: [],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Olivia"],
                                          familyName: [],
                                        },
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Janisse"],
                                  familyName: [fn.lugo],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Jacob"],
                                          familyName: [],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Jack"],
                                          familyName: [],
                                        },
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Stephanie"],
                                  familyName: [fn.lugo],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Eliany"],
                                          familyName: [],
                                        },
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Emmanuel"],
                                  familyName: [fn.lugo],
                                },
                              ]
                            },
                          ],
                        },
                        {
                          ...ID(),
                          name: ["Pilar"],
                          familyName: [fn.lugo, fn.rivas],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Juan"],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Mercedes"],
                                  familyName: [],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Oseas"],
                                          familyName: [],
                                        },
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Angie"],
                                  familyName: [],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Lyangilee"],
                                          familyName: [],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Maddox"],
                                          familyName: [],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Harper"],
                                          familyName: [],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Hunter"],
                                          familyName: [],
                                        },
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Juan"],
                                  familyName: [],
                                },
                              ]
                            },
                          ],
                        },
                        {
                          ...ID(),
                          name: ["Paulina"],
                          familyName: [fn.lugo, fn.rivas],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Pedro"],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Many"],
                                  familyName: [],
                                },
                                {
                                  ...ID(),
                                  name: ["Paola"],
                                  familyName: [],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Esme"],
                                          familyName: [],
                                        }
                                      ]
                                    }
                                  ]
                                },
                              ]
                            },
                          ],
                        },
                        {
                          ...ID(),
                          name: ["Elba"],
                          familyName: [fn.lugo, fn.rivas],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Gilberto"],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Shayanne"],
                                  familyName: [],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Kenji"],
                                          familyName: [],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Jaxler"],
                                          familyName: [],
                                        },
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Gilbert"],
                                  familyName: [],
                                },
                              ]
                            },
                          ],
                        },
                        {
                          ...ID(),
                          name: ["Daniela"],
                          familyName: [fn.lugo, fn.rivas],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Félix"],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Darlene"],
                                  familyName: [],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Isabela"],
                                          familyName: [],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Aria"],
                                          familyName: [],
                                        },
                                      ]

                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Lixdania"],
                                  familyName: [],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Noah"],
                                          familyName: [],
                                        },
                                      ]

                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Félix"],
                                  familyName: [],
                                },
                              ]
                            },
                          ],
                        },
                      ]
                    }
                  ]
                },
                {
                  ...ID(),
                  name: ["Romelia", "Antonia"],
                  familyName: [fn.rivas, fn.ramirez],
                },
                {
                  ...rp.pedroRivas,
                  children: [
                    {
                      group: "pareja",
                      ...rp.virgiliaRamirez,
                      children: virgiliaRamirezChildren,
                    },
                  ],
                },
                {
                  ...ID(),
                  name: ["Digna", "María"],
                  familyName: [fn.rivas, fn.ramirez],
                  children: [
                    {
                      ...ID(),
                      group: "pareja",
                      name: [],
                      familyName: [fn.abreu],
                      children: [
                        {
                          ...ID(),
                          name: ["Altagracia"],
                          familyName: [fn.abreu, fn.rivas],
                        },
                        {
                          ...ID(),
                          name: ["Juan", "Felix"],
                          familyName: [fn.abreu, fn.rivas],
                        },
                        {
                          ...ID(),
                          name: ["Juana", "Margarita"],
                          familyName: [fn.abreu, fn.rivas],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: [],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: [],
                                  familyName: [fn.null, fn.abreu],
                                },
                                {
                                  ...ID(),
                                  name: [],
                                  familyName: [fn.null, fn.abreu],
                                },
                                {
                                  ...ID(),
                                  name: [],
                                  familyName: [fn.null, fn.abreu],
                                },
                              ],
                            }
                          ],
                        },
                        {
                          ...ID(),
                          name: ["Rosa"],
                          familyName: [fn.abreu, fn.rivas],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: [],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Shanerlyn"],
                                  familyName: [fn.null, fn.abreu],
                                },
                              ],
                            }
                          ],
                        },
                        {
                          ...ID(),
                          name: ["Osiris"],
                          familyName: [fn.abreu, fn.rivas],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: [],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Raúl"],
                                  familyName: [],
                                },
                                {
                                  ...ID(),
                                  name: ["Elisa"],
                                  familyName: [],
                                },
                              ],
                            }
                          ],
                        },
                        {
                          ...ID(),
                          name: ["Martin"],
                          familyName: [fn.abreu, fn.rivas],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: [],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Damiani"],
                                  familyName: [fn.abreu, fn.null],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Fernández"],
                                          familyName: [],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Benjamin"],
                                          familyName: [],
                                        },
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Angel"],
                                  nickname: "Angelito",
                                  familyName: [fn.abreu, fn.null],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Josue"],
                                          familyName: [fn.abreu, fn.null],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Jael"],
                                          familyName: [fn.abreu, fn.null],
                                        },
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Mercedes"],
                                  familyName: [fn.abreu, fn.null],
                                },
                              ],
                            }
                          ],
                        },
                        {
                          ...ID(),
                          name: ["Andres", "Santiago"],
                          familyName: [fn.abreu, fn.rivas],
                          nickname: "Chago",
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: [],
                              familyName: [fn.grullon],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Julia", "Bellamil"],
                                  familyName: [fn.abreu, fn.grullon],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Junior", "Andrés"],
                                          familyName: [fn.null, fn.abreu],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Junibel", "Escarlet"],
                                          familyName: [fn.null, fn.abreu],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Juliany"],
                                          familyName: [fn.null, fn.abreu],
                                        },
                                      ],
                                    }
                                  ],
                                },
                                {
                                  ...ID(),
                                  name: ["Claudia", "Yohanny"],
                                  familyName: [fn.abreu, fn.grullon],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Ryan", "Miguel"],
                                          familyName: [fn.null, fn.abreu],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Camila", "Aurora"],
                                          familyName: [fn.null, fn.abreu],
                                        },
                                      ],
                                    }
                                  ],
                                },
                                {
                                  ...ID(),
                                  name: ["Luis", "Andres"],
                                  familyName: [fn.abreu, fn.grullon],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Sophia"],
                                          familyName: [fn.abreu, fn.null],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Andrés", "Santiago"],
                                          familyName: [fn.abreu, fn.null],
                                        },
                                      ],
                                    }
                                  ],
                                },
                              ],
                            },
                            {
                              ...ID(),
                              group: "pareja",
                              name: [],
                              familyName: [fn.nunez],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Joel", "Sebastián"],
                                  familyName: [fn.abreu, fn.nunez],
                                },
                              ]
                            },
                          ],
                        },
                        {
                          ...ID(),
                          name: ["Angel", "Apolinar"],
                          familyName: [fn.abreu, fn.rivas],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: ["Maira", "María"],
                              familyName: [fn.nunez, fn.tavarez],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Albairis", "Altagracia"],
                                  familyName: [fn.abreu, fn.nunez],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [fn.florentino],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Bredalis"],
                                          familyName: [fn.florentino, fn.abreu],
                                        },
                                      ]
                                    },
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [fn.hernandez],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Angel", "Rafael"],
                                          familyName: [fn.hernandez, fn.abreu],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Lismairi"],
                                          familyName: [fn.hernandez, fn.abreu],
                                        },
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Ilvania", "Altagracia"],
                                  familyName: [fn.abreu, fn.nunez],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [fn.gutierrez],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Andelis"],
                                          familyName: [fn.gutierrez, fn.abreu],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Andílis"],
                                          familyName: [fn.gutierrez, fn.abreu],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Anyelis"],
                                          familyName: [fn.gutierrez, fn.abreu],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Andiherli"],
                                          familyName: [fn.gutierrez, fn.abreu],
                                        },
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Hircania"],
                                  familyName: [fn.abreu, fn.nunez],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [fn.contreras],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Hairoli"],
                                          familyName: [fn.contreras, fn.abreu],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Harold"],
                                          familyName: [fn.contreras, fn.abreu],
                                        },
                                      ]
                                    },
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [fn.munoz],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Jeyden"],
                                          familyName: [fn.munoz, fn.abreu],
                                        },
                                      ]
                                    }
                                  ]
                                },
                                {
                                  ...ID(),
                                  name: ["Albaneris"],
                                  familyName: [fn.abreu, fn.nunez],
                                  children: [
                                    {
                                      ...ID(),
                                      group: "pareja",
                                      name: [],
                                      familyName: [fn.olivares],
                                      children: [
                                        {
                                          ...ID(),
                                          name: ["Camilo"],
                                          familyName: [fn.olivares, fn.abreu],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Chayane"],
                                          familyName: [fn.olivares, fn.abreu],
                                        },
                                        {
                                          ...ID(),
                                          name: ["Camili"],
                                          familyName: [fn.olivares, fn.abreu],
                                        },
                                      ]
                                    }
                                  ]
                                },
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      ...ID(),
                      group: "pareja",
                      name: [],
                      familyName: [fn.perez],
                      children: [
                        {
                          ...ID(),
                          name: ["Felix"],
                          familyName: [fn.perez, fn.rivas],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: [],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Pierre"],
                                  familyName: [fn.perez, fn.null],
                                },
                                {
                                  ...ID(),
                                  name: ["Fenely"],
                                  familyName: [fn.perez, fn.null],
                                },
                              ]
                            }
                          ],
                        },
                        {
                          ...ID(),
                          name: ["Juan", "Antonio"],
                          familyName: [fn.perez, fn.rivas],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: [],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Edily"],
                                  familyName: [fn.perez, fn.null],
                                },
                                {
                                  ...ID(),
                                  name: ["Norbelis"],
                                  familyName: [fn.perez, fn.null],
                                },
                                {
                                  ...ID(),
                                  name: ["Juan", "Antonio"],
                                  familyName: [fn.perez, fn.null],
                                },
                              ]
                            }
                          ],
                        },
                        {
                          ...ID(),
                          name: ["María", "Dolores"],
                          familyName: [fn.perez, fn.rivas],
                          children: [
                            {
                              ...ID(),
                              group: "pareja",
                              name: [],
                              familyName: [],
                              children: [
                                {
                                  ...ID(),
                                  name: ["Darwin"],
                                  familyName: [fn.null, fn.perez],
                                },
                                {
                                  ...ID(),
                                  name: ["Edwin"],
                                  familyName: [fn.null, fn.perez],
                                },
                                {
                                  ...ID(),
                                  name: ["Leury"],
                                  familyName: [fn.null, fn.perez],
                                },
                              ]
                            }
                          ],
                        },
                      ]
                    }
                  ]
                },
                {
                  ...ID(),
                  group: "asociado",
                  name: ["Felicia"],
                  familyName: [fn.rivas, fn.suero],
                  altParent: {
                    ...ID(),
                    name: ["Martina"],
                    familyName: [fn.suero],
                  }
                }
              ]
            }
          ],
        },
        {
          ...ID(),
          name: ["Amable"],
          familyName: [fn.ramirez, fn.grullon],
        }
      ]
    },
  ]
}
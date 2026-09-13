const colourList = [{
        word: "KPD",
        style: "color: var(--kpd-colour); font-weight: bold;"
   },
    {
        word: "SPD",
        style: "color: var(--spd-colour); font-weight: bold;"
  },
    {
        word: "Reichsbanner",
        style: "color: #e08979; font-weight: bold;"
  },
    {
         word: "Stahlhelm",
        style: "color: var(--dnvp-colour); font-weight: bold;"
  },
    {
        word: "SA",
        style: "color: var(--nsdap-colour); font-weight: bold;"
  },
    {
        word: "DHP",
        style: "color: var(--dhp-colour); font-weight: bold;"
  },
    {
        word: "WP",
        style: "color: var(--wp-colour); font-weight: bold;"
  },
    {
        word: "RFB",
        style: "color: var(--kpd-colour); font-weight: bold;"
  },
    {
        word: "Freikorps",
        style: "color: var(--i-colour); font-weight: bold;"
  },
    {
        word: "USPD",
        style: "color: var(--uspd-colour); font-weight: bold;"
  },
    {
        word: "Sammlung",
        style: "color: #d4d68b; font-weight: light;"
  },
    {
        word: "Linksliberale",
        style: "color: #edd94c; font-weight: light;"
  },
    {
        word: "Pazifisten",
        style: "color: #a685a2; font-weight: light;"
  },
    {
        word: "Nationalliberale",
        style: "color: #c5f062; font-weight: light;"
  },
    {
        word: "Republikschützer",
        style: "color: #e3c35b; font-weight: light;"
  },
    {
        word: "DDP",
        style: "color: var(--ddp-colour); font-weight: bold;"
   },
    {
        word: "DStP",
        style: "color: var(--ddp-colour); font-weight: bold;"
   },
    {
        word: "Z",
        style: "color: var(--z-colour); font-weight: bold;"
   },
    {
        word: "BVP",
        style: "color: var(--bvp-colour); font-weight: bold;"
   },
    {
        word: "DVP",
        style: "color: var(--dvp-colour); font-weight: bold;"
   },
    {
        word: "DNVP",
        style: "color: var(--dnvp-colour); font-weight: bold;"
   },
    {
        word: "NSDAP",
        style: "color: var(--nsdap-colour); font-weight: bold;"
   },
    {
        word: "DAP",
        style: "color: var(--dap-colour); font-weight: bold;"
   },
    {
        word: "SAPD",
        style: "color: var(--sapd-colour); font-weight: bold;"
   },
    {
        word: "Others",
        style: "color: var(--others-colour); font-weight: bold;"
    },
];



const tooltipList = [{
    searchString: "KPD",
    explanationText: "<img src=img/kpd(2).svg> Kommunistische Partei Deutschlands </br></br> Communist Party Of Germany"
    },
    {
    searchString: "DDP",
    explanationText: "<img src=img/ddp2.svg> Deutsche Demokratische Partei </br></br> German Democratic Party"
    },
    {
    searchString: "DStP",
    explanationText: "<img src=img/ddp2.svg> Deutsche Staatspartei </br></br> German State Party"
    },
    {
    searchString: "SPD",
    explanationText: "<img src=img/spd(2).png> Sozialdemokratische Partei Deutschlands </br></br> Social Democratic Party Of Germany"
    },
    {
    searchString: "DHP",
    explanationText: "<img src=img/dhp.webp> Deutsch-Hannoversche Partei </br></br> German Hanoverian Party"
    },
    {
    searchString: "WP",
    explanationText: "<img src=img/wp.png> Wirtschaftspartei </br></br> German Middle Class Party"
    },
    {
    searchString: "Z",
    explanationText: "<img src=img/zentrum.png> Zentrum </br></br> German Center Party"
    },
    {
    searchString: "USPD",
    explanationText: "<img src=img/uspd.png> Unabhängige Sozialdemokratische Partei Deutschlands </br></br> Independent Social Democratic Party Of Germany"
    },
    {
    searchString: "BVP",
    explanationText: "<img src=img/bvp.jpeg> Bayerische Volkspartei </br></br> Bavarian People's Party"
    },
    {
    searchString: "DVP",
    explanationText: "<img src=img/dvp2.webp> Deutsche Volkspartei </br></br> German People's Party"
    },
    {
    searchString: "DNVP",
    explanationText: "<img src=img/dnvp_good_one.png> Deutschnationale Volkspartei </br></br> German National People's Party"
    },
    {
    searchString: "NSDAP",
    explanationText: "<img src=img/nsdap.webp> Nationalsozialistische Deutsche Arbeiterpartei </br></br> National Socialist German Worker's Party"
    },
    {
    searchString: "DAP",
    explanationText: "<img src=img/dap.svg> Deutsche Arbeiterpartei </br></br> German Worker's Party"
    },
    {
    searchString: "Sammlung",
    explanationText: "The Sammlung wing is a faction of pragmatists who put coalition stability before ideology."
    },
    {
    searchString: "Linksliberale",
    explanationText: "The Linksliberale faction is influenced by Naumann's left-liberal tradition of reform through cooperation between labor and capital."
    },
    {
    searchString: "Pazifisten",
    explanationText: "The Pazifisten faction is a faction of pacifist internationalists in Quidde's circle influenced by Kant."
    },
    {
    searchString: "Nationalliberale",
    explanationText: "The Nationalliberale faction are remnants of the old national-liberal tradition, favoring fiscal orthodoxy and closer ties to industry and the DVP."
    },
    {
    searchString: "Republikschützer",
    explanationText: "Militant republicans who believe persuasion has failed and only direct mobilization can defend the Republic now."
    },
    {
    searchString: "SAPD",
    explanationText: "<img src=img/sapd.png> Sozialistische Arbeiterpartei Deutschlands </br></br> Socialist Workers' Party of Germany"
    },
    {
    searchString: "Reichsbanner",
    explanationText: "<img src=img/reichsbanner-Photoroom.png> Reichsbanner Schwarz-Rot-Gold!"
    },
    {
    searchString: "RFB",
    explanationText: "<img src=img/rfb.svg> Rotfrontkämpferbund </br></br> Alliance of Red Front-Fighters"
    },
    {
    searchString: "Stahlhelm",
    explanationText: "<img src=img/stalhelm.svg> Der Stahlhelm </br></br> The DNVP's paramilitary."
    },
    {
    searchString: "SA",
    explanationText: "<img src=img/sa.webp> Sturmabteilung </br></br> Storm Detachment"
    },
    {
    searchString: "Freikorps",
    explanationText: "<img src=img/freikorps-Photoroom.png> Freikorps </br></br> A conservative paramilitary."
    },
    {
    searchString: "Others",
    explanationText: "Several other parties in German politics."
    },
];

import React from "react";

const config = {
  ROMS: {
      super_mario_bros: {
          name: "Super Mario Bros",
          description: <span>Super Mario Bros ROM.</span>,
          url: "https://cdn.jsdelivr.net/gh/blacksheep-git/jsnes-web@master/public/roms/Super%20Mario%20Bros%20(E).nes"
      },
      bomberman_2: {
          name: "Bomberman 2",
          description: <span>Bomber Man 2 ROM.</span>,
          url: "https://cdn.jsdelivr.net/gh/blacksheep-git/jsnes-web@master/public/roms/Bomber_man2.nes"
      },
      super_mario_bros_3: {
          name: "Super Mario Bros 3",
          description: <span>Super Mario Bros 3 ROM.</span>,
          url: "https://cdn.jsdelivr.net/gh/blacksheep-git/jsnes-web@master/public/roms/Super%20Mario%20Bros%20(E).nes"
      },
      adventure_island: {
          name: "Hudson's Adventure Island",
          description: <span>Hudson's Adventure Island ROM.</span>,
          url: "https://cdn.jsdelivr.net/gh/blacksheep-git/jsnes-web@master/public/roms/Bomber_man2.nes"
      },
  },
  GOOGLE_ANALYTICS_CODE: process.env.REACT_APP_GOOGLE_ANALYTICS_CODE,
  SENTRY_URI: process.env.REACT_APP_SENTRY_URI
};

export default config;

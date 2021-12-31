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
          url: "https://cdn.jsdelivr.net/gh/teoo-io/jsnes-web@master/public/roms/Super%20Mario%20Bros%203%20(PC10).nes"
      },
      adventure_island: {
          name: "Hudson's Adventure Island",
          description: <span>Hudson's Adventure Island ROM.</span>,
          url: "https://cdn.jsdelivr.net/gh/teoo-io/jsnes-web@master/public/roms/Hudson's%20Adventure%20Island%20(USA).nes"
      },
      super_mario_bros_2: {
          name: "Super Mario Bros 2",
          description: <span>Super Mario Bros 2 ROM.</span>,
          url: "https://cdn.jsdelivr.net/gh/teoo-io/jsnes-web@master/public/roms/Super%20Mario%20Bros%202.nes"
      },
      adventure_island_2: {
          name: "Hudson's Adventure Island 2",
          description: <span>Hudson's Adventure Island 2 ROM.</span>,
          url: "https://cdn.jsdelivr.net/gh/teoo-io/jsnes-web@master/public/roms/Adventure%20Island%20II%20(USA).nes"
      },
  },
  GOOGLE_ANALYTICS_CODE: process.env.REACT_APP_GOOGLE_ANALYTICS_CODE,
  SENTRY_URI: process.env.REACT_APP_SENTRY_URI
};

export default config;

import React from "react";

const config = {
  ROMS: {
      super_mario_bros: {
          name: "Super Mario Bros",
          description: <span>Super Mario Bros ROM.</span>,
          url: "https://cdn.jsdelivr.net/gh/blacksheep-git/jsnes-web@master/public/roms/super_mario_bros.nes"
      },
      bomberman_2: {
          name: "Bomberman 2",
          description: <span>Bomber Man 2 ROM.</span>,
          url: "https://cdn.jsdelivr.net/gh/blacksheep-git/jsnes-web@master/public/roms/bomber_man2.nes"
      },
      super_mario_bros_3: {
          name: "Super Mario Bros 3",
          description: <span>Super Mario Bros 3 ROM.</span>,
          url: "https://cdn.jsdelivr.net/gh/teoo-io/jsnes-web@master/public/roms/super_mario_bros_3.nes"
      },
      adventure_island: {
          name: "Hudson's Adventure Island",
          description: <span>Hudson's Adventure Island ROM.</span>,
          url: "https://cdn.jsdelivr.net/gh/teoo-io/jsnes-web@master/public/roms/hudsons_adventure_island.nes"
      },
      super_mario_bros_2: {
          name: "Super Mario Bros 2",
          description: <span>Super Mario Bros 2 ROM.</span>,
          url: "https://cdn.jsdelivr.net/gh/teoo-io/jsnes-web@master/public/roms/super_mario_bros2.nes"
      },
      adventure_island_2: {
          name: "Hudson's Adventure Island 2",
          description: <span>Hudson's Adventure Island 2 ROM.</span>,
          url: "https://cdn.jsdelivr.net/gh/teoo-io/jsnes-web@master/public/roms/adventure_island_II.nes"
      },
      contra: {
          name: "Contra",
          description: <span>Contra ROM.</span>,
          url: "https://cdn.jsdelivr.net/gh/blacksheep-git/jsnes-web@master/public/roms/contra.nes"
      },
      kyrbys_adventure: {
          name: "Kirby's Adventure",
          description: <span>Kirby's Adventure ROM.</span>,
          url: "https://cdn.jsdelivr.net/gh/blacksheep-git/jsnes-web@master/public/roms/kirbys_adventure.nes"
      },
      legend_of_zelda: {
          name: "The Legend of Zelda",
          description: <span>The Legend of Zelda ROM.</span>,
          url: "https://cdn.jsdelivr.net/gh/teoo-io/jsnes-web@master/public/roms/the_legend_of_zelda.nes"
      },
      mega_man_2: {
          name: "Mega Man 2",
          description: <span>Mega Man 2 ROM.</span>,
          url: "https://cdn.jsdelivr.net/gh/teoo-io/jsnes-web@master/public/roms/mega_man2.nes"
      },
      mega_man_3: {
          name: "Mega Man 3",
          description: <span>Mega Man 3 ROM.</span>,
          url: "https://cdn.jsdelivr.net/gh/teoo-io/jsnes-web@master/public/roms/mega_man3.nes"
      },
      zelda_2: {
          name: "Zelda 2 - The Adventure of Link",
          description: <span>Zelda 2 - The Adventure of Link ROM.</span>,
          url: "https://cdn.jsdelivr.net/gh/teoo-io/jsnes-web@master/public/roms/zelda_2_the_adventure_of_link.nes"
      },
  },
  GOOGLE_ANALYTICS_CODE: process.env.REACT_APP_GOOGLE_ANALYTICS_CODE,
  SENTRY_URI: process.env.REACT_APP_SENTRY_URI
};

export default config;

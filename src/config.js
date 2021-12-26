import React from "react";

const config = {
  ROMS: {
      super_mario_bros: {
          name: "Super Mario Bros",
          description: <span>An online emulation of Super Mario Bros NES ROM.</span>,
          url: "http://localhost:3000/roms/Super Mario Bros (E).nes"
      },
      bomberman_2: {
          name: "Bomberman 2",
          description: <span>An online emulation of Super Mario Bros NES ROM.</span>,
          url: "http://localhost:3000/roms/Bomber_man2.nes"
      },
  },
  GOOGLE_ANALYTICS_CODE: process.env.REACT_APP_GOOGLE_ANALYTICS_CODE,
  SENTRY_URI: process.env.REACT_APP_SENTRY_URI
};

export default config;

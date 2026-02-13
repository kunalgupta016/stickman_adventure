export const storyOrder = [
  "heist",
  "prison",
  "area51",
  "island",
  "gladiator",
  "cyberpunk",
  "spaceStation",
  "spyMission",
  "medievalWar",
  "horrorMansion",
  "multiverse"
];

export const stories = {
  heist: {
    id: "heist",
    title: "Breaking the Bank: Ultimate Chaos",
    description: "This time it's not simple. It's a full operation.",
    color: "bg-blue-700",
    scenes: {

      /* =========================
         PHASE 1 – ENTRY
      ==========================*/

      start: {
        id: "start",
        text: "You're outside the legendary Wall Bank. Tonight, you make history.",
        image: "bank_night",
        options: [
          { text: "Explosives", next: "fail_explosion" },
          { text: "Fake Delivery", next: "delivery_intro" },
          { text: "Laser Cutter", next: "laser_entry" },
          { text: "Underground Tunnel", next: "tunnel_dig" }
        ]
      },

      fail_explosion: {
        id: "fail_explosion",
        text: "You used WAY too much C4. The bank collapses... including you.",
        type: "fail",
        failMessage: "Subtle wasn't an option?",
        options: [{ text: "Retry", next: "start" }]
      },

      /* DELIVERY PATH */

      delivery_intro: {
        id: "delivery_intro",
        text: "You arrive with 12 pizzas. The guard looks suspicious.",
        image: "pizza_delivery",
        options: [
          { text: "Bribe Guard", next: "guard_bribed" },
          { text: "Distract Him", next: "fail_pizza_drop" },
          { text: "Sneak Behind Him", next: "staff_hall" }
        ]
      },

      guard_bribed: {
        id: "guard_bribed",
        text: "He takes the pizza and lets you in.",
        options: [
          { text: "Head to Security Room", next: "security_room" },
          { text: "Explore Lobby", next: "lobby_patrol" }
        ]
      },

      fail_pizza_drop: {
        id: "fail_pizza_drop",
        text: "You trip. Pizza everywhere. Alarm triggered.",
        type: "fail",
        failMessage: "Cheesy mistake.",
        options: [{ text: "Retry", next: "delivery_intro" }]
      },

      /* LASER PATH */

      laser_entry: {
        id: "laser_entry",
        text: "Perfect glass cut. You rappel down inside.",
        image: "window_cut",
        options: [
          { text: "Drop Too Fast", next: "fail_rope_snap" },
          { text: "Climb Slowly", next: "upper_floor" }
        ]
      },

      fail_rope_snap: {
        id: "fail_rope_snap",
        text: "Rope snaps. 40 floors. Ouch.",
        type: "fail",
        failMessage: "Gravity wins.",
        options: [{ text: "Retry", next: "laser_entry" }]
      },

      upper_floor: {
        id: "upper_floor",
        text: "You're in executive hallway.",
        options: [
          { text: "Enter Manager Office", next: "manager_office" },
          { text: "Take Elevator", next: "fail_elevator_camera" }
        ]
      },

      fail_elevator_camera: {
        id: "fail_elevator_camera",
        text: "Camera spots you instantly.",
        type: "fail",
        failMessage: "Smile for CCTV.",
        options: [{ text: "Retry", next: "upper_floor" }]
      },

      /* TUNNEL PATH */

      tunnel_dig: {
        id: "tunnel_dig",
        text: "You dig for hours... and hit something.",
        options: [
          { text: "Break Through", next: "break_room" },
          { text: "Check Map", next: "fail_sewer" }
        ]
      },

      fail_sewer: {
        id: "fail_sewer",
        text: "You tunneled into city sewer.",
        type: "fail",
        failMessage: "Wrong pipe.",
        options: [{ text: "Retry", next: "tunnel_dig" }]
      },

      break_room: {
        id: "break_room",
        text: "You pop into guard break room.",
        options: [
          { text: "Hide", next: "staff_hall" },
          { text: "Run", next: "fail_guard_spotted" }
        ]
      },

      fail_guard_spotted: {
        id: "fail_guard_spotted",
        text: "Guard turns around immediately.",
        type: "fail",
        failMessage: "Timing matters.",
        options: [{ text: "Retry", next: "break_room" }]
      },

      /* =========================
         PHASE 2 – INTERIOR
      ==========================*/

      staff_hall: {
        id: "staff_hall",
        text: "You're inside staff hallway. Cameras ahead.",
        options: [
          { text: "Disable Power", next: "power_room" },
          { text: "EMP Device", next: "emp_success" },
          { text: "Run Through", next: "fail_taser" }
        ]
      },

      fail_taser: {
        id: "fail_taser",
        text: "A guard tasers you mid-run.",
        type: "fail",
        failMessage: "Zapped.",
        options: [{ text: "Retry", next: "staff_hall" }]
      },

      power_room: {
        id: "power_room",
        text: "You reach power control.",
        options: [
          { text: "Shut Entire Grid", next: "blackout" },
          { text: "Trip Silent Alarm", next: "fail_swat_arrival" }
        ]
      },

      fail_swat_arrival: {
        id: "fail_swat_arrival",
        text: "You triggered emergency protocol. SWAT incoming.",
        type: "fail",
        failMessage: "Too loud.",
        options: [{ text: "Retry", next: "power_room" }]
      },

      blackout: {
        id: "blackout",
        text: "Whole building in darkness. Chaos.",
        options: [
          { text: "Rush to Vault", next: "vault_door" },
          { text: "Loot Offices", next: "fail_minor_loot" }
        ]
      },

      fail_minor_loot: {
        id: "fail_minor_loot",
        text: "You stole $200 and got caught.",
        type: "fail",
        failMessage: "Think bigger.",
        options: [{ text: "Retry", next: "blackout" }]
      },

      emp_success: {
        id: "emp_success",
        text: "EMP disables cameras cleanly.",
        options: [
          { text: "Go to Vault", next: "vault_door" }
        ]
      },

      manager_office: {
        id: "manager_office",
        text: "Manager office. There's a fingerprint scanner.",
        options: [
          { text: "Steal Fingerprint", next: "vault_door" },
          { text: "Hack PC", next: "fail_wrong_password" }
        ]
      },

      fail_wrong_password: {
        id: "fail_wrong_password",
        text: "Too many attempts. Locked out.",
        type: "fail",
        failMessage: "Password123 didn't work.",
        options: [{ text: "Retry", next: "manager_office" }]
      },

      lobby_patrol: {
        id: "lobby_patrol",
        text: "Guards are patrolling.",
        options: [
          { text: "Disguise", next: "vault_door" },
          { text: "Shoot", next: "fail_shootout" }
        ]
      },

      fail_shootout: {
        id: "fail_shootout",
        text: "This isn't an action movie.",
        type: "fail",
        failMessage: "Aim assist disabled.",
        options: [{ text: "Retry", next: "lobby_patrol" }]
      },

      /* =========================
         PHASE 3 – VAULT
      ==========================*/

      vault_door: {
        id: "vault_door",
        text: "The legendary vault door stands before you.",
        image: "vault_door",
        options: [
          { text: "Drill", next: "fail_drill_break" },
          { text: "Use Fingerprint", next: "vault_open" },
          { text: "Hack Panel", next: "vault_hack" }
        ]
      },

      fail_drill_break: {
        id: "fail_drill_break",
        text: "Drill overheats and explodes.",
        type: "fail",
        failMessage: "Cheap tools.",
        options: [{ text: "Retry", next: "vault_door" }]
      },

      vault_hack: {
        id: "vault_hack",
        text: "You attempt bypass code.",
        options: [
          { text: "Enter Random Code", next: "fail_lockdown" },
          { text: "Careful Algorithm", next: "vault_open" }
        ]
      },

      fail_lockdown: {
        id: "fail_lockdown",
        text: "Vault locks permanently.",
        type: "fail",
        failMessage: "Too risky.",
        options: [{ text: "Retry", next: "vault_hack" }]
      },

      vault_open: {
        id: "vault_open",
        text: "Vault opens. Diamonds everywhere.",
        image: "vault_treasure",
        options: [
          { text: "Take Everything", next: "escape_heavy" },
          { text: "Take Only Diamonds", next: "escape_clean" },
          { text: "Trigger Hidden Button", next: "secret_alien" }
        ]
      },

      /* =========================
         PHASE 4 – ESCAPE
      ==========================*/

      escape_heavy: {
        id: "escape_heavy",
        text: "You're too slow. SWAT surrounds building.",
        options: [
          { text: "Fight", next: "fail_arrested" },
          { text: "Surrender", next: "ending_arrested" }
        ]
      },

      escape_clean: {
        id: "escape_clean",
        text: "You move swiftly toward rooftop.",
        options: [
          { text: "Helicopter Escape", next: "ending_mastermind" },
          { text: "Jump to Adjacent Building", next: "ending_perfect" }
        ]
      },

      secret_alien: {
        id: "secret_alien",
        text: "A hidden teleporter activates. UFO beam appears.",
        options: [
          { text: "Step Into Beam", next: "ending_alien" }
        ]
      },

      /* =========================
         ENDINGS
      ==========================*/

      ending_mastermind: {
        id: "ending_mastermind",
        type: "ending",
        text: "You escape via helicopter. News calls it the perfect crime.",
        image: "helicopter_escape",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_perfect: {
        id: "ending_perfect",
        type: "ending",
        text: "You disappear into night with millions. Untouched.",
        image: "night_escape",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_arrested: {
        id: "ending_arrested",
        type: "ending",
        text: "You surrender. 40 years sentence.",
        image: "arrested",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_alien: {
        id: "ending_alien",
        type: "ending",
        text: "Aliens take you. You now rob galaxies.",
        image: "alien_escape",
        options: [{ text: "Play Again", next: "start" }]
      },

      fail_arrested: {
        id: "fail_arrested",
        type: "fail",
        text: "You tried fighting SWAT. That was brave. And stupid.",
        failMessage: "Not Rambo.",
        options: [{ text: "Retry", next: "escape_heavy" }]
      }

    }
  },
  prison: {
    id: "prison",
    title: "Escaping the Prison: Maximum Security",
    description: "Caught after the heist. Now survive and escape.",
    color: "bg-orange-700",
    scenes: {

      /* =========================
         PHASE 1 – CELL STRATEGY
      ==========================*/

      start: {
        id: "start",
        text: "You wake up in a high-security prison cell. Guard Dave watches TV outside.",
        image: "prison_cell",
        options: [
          { text: "File Bars", next: "file_bars" },
          { text: "Fake Illness", next: "fake_illness" },
          { text: "Dig Tunnel", next: "dig_tunnel" },
          { text: "Befriend Guard", next: "befriend_guard" }
        ]
      },

      /* FILE PATH */

      file_bars: {
        id: "file_bars",
        text: "You start filing the bars. It takes hours.",
        options: [
          { text: "Jump Down", next: "fail_splat" },
          { text: "Make Rope", next: "yard_escape" }
        ]
      },

      fail_splat: {
        id: "fail_splat",
        type: "fail",
        text: "You jump. Gravity still works.",
        failMessage: "Physics wins.",
        options: [{ text: "Retry", next: "file_bars" }]
      },

      /* ILLNESS PATH */

      fake_illness: {
        id: "fake_illness",
        text: "You fake a seizure. Guards rush you to infirmary.",
        options: [
          { text: "Steal Keys", next: "hall_escape" },
          { text: "Actually Panic", next: "fail_real_doctor" }
        ]
      },

      fail_real_doctor: {
        id: "fail_real_doctor",
        type: "fail",
        text: "Doctor sees you're fine. Solitary confinement.",
        failMessage: "Bad acting.",
        options: [{ text: "Retry", next: "fake_illness" }]
      },

      /* TUNNEL PATH */

      dig_tunnel: {
        id: "dig_tunnel",
        text: "You dig through the floor for days.",
        options: [
          { text: "Break Through", next: "guard_breakroom" },
          { text: "Wrong Direction", next: "fail_sewer_prison" }
        ]
      },

      fail_sewer_prison: {
        id: "fail_sewer_prison",
        type: "fail",
        text: "You tunnel into toxic sewage.",
        failMessage: "Smells like failure.",
        options: [{ text: "Retry", next: "dig_tunnel" }]
      },

      guard_breakroom: {
        id: "guard_breakroom",
        text: "You pop into guard break room.",
        options: [
          { text: "Hide Under Table", next: "hall_escape" },
          { text: "Run", next: "fail_spotted" }
        ]
      },

      fail_spotted: {
        id: "fail_spotted",
        type: "fail",
        text: "Guard instantly notices.",
        failMessage: "Bad timing.",
        options: [{ text: "Retry", next: "guard_breakroom" }]
      },

      /* SOCIAL PATH */

      befriend_guard: {
        id: "befriend_guard",
        text: "You talk to Dave daily. He seems lonely.",
        options: [
          { text: "Bring Coffee", next: "trust_up" },
          { text: "Threaten Him", next: "fail_solitary" }
        ]
      },

      fail_solitary: {
        id: "fail_solitary",
        type: "fail",
        text: "You get thrown into solitary.",
        failMessage: "Not friendly.",
        options: [{ text: "Retry", next: "befriend_guard" }]
      },

      trust_up: {
        id: "trust_up",
        text: "Dave trusts you. He drops key accidentally.",
        options: [
          { text: "Take Key", next: "hall_escape" },
          { text: "Ignore It", next: "fail_missed_chance" }
        ]
      },

      fail_missed_chance: {
        id: "fail_missed_chance",
        type: "fail",
        text: "That was your only chance.",
        failMessage: "Opportunity gone.",
        options: [{ text: "Retry", next: "trust_up" }]
      },

      /* =========================
         PHASE 2 – INSIDE PRISON
      ==========================*/

      hall_escape: {
        id: "hall_escape",
        text: "You're in prison hallway.",
        options: [
          { text: "Go to Yard", next: "yard_escape" },
          { text: "Enter Security Room", next: "security_room_prison" },
          { text: "Start Riot", next: "riot_start" }
        ]
      },

      security_room_prison: {
        id: "security_room_prison",
        text: "You see camera system.",
        options: [
          { text: "Disable Cameras", next: "cameras_off" },
          { text: "Press Random Buttons", next: "fail_alarm_prison" }
        ]
      },

      fail_alarm_prison: {
        id: "fail_alarm_prison",
        type: "fail",
        text: "You trigger lockdown alarm.",
        failMessage: "Too curious.",
        options: [{ text: "Retry", next: "security_room_prison" }]
      },

      cameras_off: {
        id: "cameras_off",
        text: "Cameras disabled. Chaos begins.",
        options: [
          { text: "Run to Yard", next: "yard_escape" }
        ]
      },

      /* =========================
         PHASE 3 – YARD ESCAPE
      ==========================*/

      yard_escape: {
        id: "yard_escape",
        text: "You're in prison yard. Walls are huge.",
        options: [
          { text: "Climb Wall", next: "fail_sniper" },
          { text: "Sewage Pipe", next: "sewage_escape" },
          { text: "Helicopter Pad", next: "heli_pad" }
        ]
      },

      fail_sniper: {
        id: "fail_sniper",
        type: "fail",
        text: "Sniper tower spots you.",
        failMessage: "Too exposed.",
        options: [{ text: "Retry", next: "yard_escape" }]
      },

      sewage_escape: {
        id: "sewage_escape",
        text: "You crawl through dark tunnel.",
        options: [
          { text: "Keep Crawling", next: "ending_dirty_escape" },
          { text: "Turn Back", next: "fail_gas" }
        ]
      },

      fail_gas: {
        id: "fail_gas",
        type: "fail",
        text: "Toxic gas fills tunnel.",
        failMessage: "Wrong pipe again.",
        options: [{ text: "Retry", next: "sewage_escape" }]
      },

      heli_pad: {
        id: "heli_pad",
        text: "A supply helicopter is landing.",
        options: [
          { text: "Hijack Helicopter", next: "ending_heli_escape" },
          { text: "Hide Inside Cargo", next: "ending_smart_escape" }
        ]
      },

      /* =========================
         RIOT PATH
      ==========================*/

      riot_start: {
        id: "riot_start",
        text: "You shout. Prisoners riot.",
        options: [
          { text: "Lead Riot", next: "fail_riot_shot" },
          { text: "Escape During Chaos", next: "yard_escape" }
        ]
      },

      fail_riot_shot: {
        id: "fail_riot_shot",
        type: "fail",
        text: "Guards fire rubber bullets.",
        failMessage: "Revolution failed.",
        options: [{ text: "Retry", next: "riot_start" }]
      },

      /* =========================
         ENDINGS
      ==========================*/

      ending_dirty_escape: {
        id: "ending_dirty_escape",
        type: "ending",
        text: "You escape through sewage. Smelly but free.",
        image: "sewage_freedom",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_heli_escape: {
        id: "ending_heli_escape",
        type: "ending",
        text: "You hijack helicopter and vanish.",
        image: "helicopter_escape",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_smart_escape: {
        id: "ending_smart_escape",
        type: "ending",
        text: "You hide in cargo and escape silently.",
        image: "cargo_escape",
        options: [{ text: "Play Again", next: "start" }]
      }

    }
  },
  area51: {
    id: "area51",
    title: "Infiltrating Area 51",
    description: "They said 'Don't go near it.' You didn't listen.",
    color: "bg-red-700",
    scenes: {

      /* =========================
         PHASE 1 – DESERT ENTRY
      ==========================*/

      start: {
        id: "start",
        text: "You stand outside the mysterious Area 51. Spotlights sweep the desert.",
        image: "desert_night",
        options: [
          { text: "Storm The Gate", next: "fail_sniped" },
          { text: "Sneak Through Desert", next: "desert_sneak" },
          { text: "Disguise as Scientist", next: "fake_scientist" },
          { text: "Alien Signal Device", next: "alien_signal" }
        ]
      },

      fail_sniped: {
        id: "fail_sniped",
        type: "fail",
        text: "A sniper immediately spots you.",
        failMessage: "Too obvious.",
        options: [{ text: "Retry", next: "start" }]
      },

      desert_sneak: {
        id: "desert_sneak",
        text: "You crawl through desert. Motion sensors ahead.",
        options: [
          { text: "Disable Sensor", next: "sensor_success" },
          { text: "Run Fast", next: "fail_landmine" }
        ]
      },

      fail_landmine: {
        id: "fail_landmine",
        type: "fail",
        text: "You step on something. Boom.",
        failMessage: "Watch your step.",
        options: [{ text: "Retry", next: "desert_sneak" }]
      },

      sensor_success: {
        id: "sensor_success",
        text: "Sensors disabled. You reach ventilation shaft.",
        options: [
          { text: "Enter Vent", next: "vent_system" },
          { text: "Enter Main Door", next: "fail_face_scan" }
        ]
      },

      fail_face_scan: {
        id: "fail_face_scan",
        type: "fail",
        text: "Facial recognition denies you.",
        failMessage: "Not authorized.",
        options: [{ text: "Retry", next: "sensor_success" }]
      },

      /* =========================
         SCIENTIST PATH
      ==========================*/

      fake_scientist: {
        id: "fake_scientist",
        text: "You wear lab coat and glasses.",
        options: [
          { text: "Act Confident", next: "lab_hallway" },
          { text: "Look Suspicious", next: "fail_guard_question" }
        ]
      },

      fail_guard_question: {
        id: "fail_guard_question",
        type: "fail",
        text: "Guard asks for ID. You panic.",
        failMessage: "Act natural.",
        options: [{ text: "Retry", next: "fake_scientist" }]
      },

      /* =========================
         ALIEN DEVICE PATH
      ==========================*/

      alien_signal: {
        id: "alien_signal",
        text: "You activate strange alien beacon.",
        options: [
          { text: "Wait", next: "alien_arrival" },
          { text: "Turn Off", next: "fail_emp" }
        ]
      },

      fail_emp: {
        id: "fail_emp",
        type: "fail",
        text: "Device explodes in EMP shock.",
        failMessage: "Too unstable.",
        options: [{ text: "Retry", next: "alien_signal" }]
      },

      alien_arrival: {
        id: "alien_arrival",
        text: "A UFO appears above base.",
        options: [
          { text: "Enter During Chaos", next: "lab_hallway" }
        ]
      },

      /* =========================
         PHASE 2 – INSIDE FACILITY
      ==========================*/

      vent_system: {
        id: "vent_system",
        text: "You're inside ventilation system.",
        options: [
          { text: "Go Left", next: "alien_lab" },
          { text: "Go Right", next: "weapon_room" }
        ]
      },

      lab_hallway: {
        id: "lab_hallway",
        text: "You're inside main research hallway.",
        options: [
          { text: "Alien Containment", next: "alien_lab" },
          { text: "Weapon Testing Room", next: "weapon_room" },
          { text: "Server Room", next: "server_room" }
        ]
      },

      weapon_room: {
        id: "weapon_room",
        text: "Experimental plasma weapons everywhere.",
        options: [
          { text: "Take Plasma Gun", next: "chaos_path" },
          { text: "Leave Quietly", next: "server_room" }
        ]
      },

      chaos_path: {
        id: "chaos_path",
        text: "You fire plasma accidentally. Alarm triggered.",
        options: [
          { text: "Fight Through", next: "fail_robot_guard" },
          { text: "Run", next: "escape_corridor" }
        ]
      },

      fail_robot_guard: {
        id: "fail_robot_guard",
        type: "fail",
        text: "Robot security overpowers you.",
        failMessage: "Future tech wins.",
        options: [{ text: "Retry", next: "chaos_path" }]
      },

      server_room: {
        id: "server_room",
        text: "Massive data servers glowing blue.",
        options: [
          { text: "Download Files", next: "secret_truth" },
          { text: "Delete Records", next: "ending_coverup" }
        ]
      },

      /* =========================
         ALIEN LAB
      ==========================*/

      alien_lab: {
        id: "alien_lab",
        text: "You see real alien in containment.",
        image: "alien_containment",
        options: [
          { text: "Free Alien", next: "alien_friend" },
          { text: "Touch Glass", next: "fail_alien_mind" }
        ]
      },

      fail_alien_mind: {
        id: "fail_alien_mind",
        type: "fail",
        text: "Alien uses telepathy. You faint.",
        failMessage: "Mind blown.",
        options: [{ text: "Retry", next: "alien_lab" }]
      },

      alien_friend: {
        id: "alien_friend",
        text: "Alien trusts you and breaks containment.",
        options: [
          { text: "Escape Together", next: "ending_alien_escape" },
          { text: "Betray Alien", next: "ending_betrayal" }
        ]
      },

      /* =========================
         SECRET TRUTH PATH
      ==========================*/

      secret_truth: {
        id: "secret_truth",
        text: "Files reveal time-travel experiments.",
        options: [
          { text: "Use Time Machine", next: "ending_time_travel" },
          { text: "Expose To World", next: "ending_whistleblower" }
        ]
      },

      escape_corridor: {
        id: "escape_corridor",
        text: "You run through escape corridor.",
        options: [
          { text: "Steal Jet", next: "ending_jet_escape" },
          { text: "Hide", next: "fail_found" }
        ]
      },

      fail_found: {
        id: "fail_found",
        type: "fail",
        text: "You hide in wrong room.",
        failMessage: "Not safe.",
        options: [{ text: "Retry", next: "escape_corridor" }]
      },

      /* =========================
         ENDINGS
      ==========================*/

      ending_alien_escape: {
        id: "ending_alien_escape",
        type: "ending",
        text: "You and alien escape into space.",
        image: "ufo_escape",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_betrayal: {
        id: "ending_betrayal",
        type: "ending",
        text: "You betray alien for money. Government hires you.",
        image: "government_agent",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_time_travel: {
        id: "ending_time_travel",
        type: "ending",
        text: "You go back in time and stop yourself from coming.",
        image: "time_machine",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_whistleblower: {
        id: "ending_whistleblower",
        type: "ending",
        text: "World learns the truth. Chaos begins.",
        image: "news_breaking",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_jet_escape: {
        id: "ending_jet_escape",
        type: "ending",
        text: "You steal experimental jet and vanish.",
        image: "jet_escape",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_coverup: {
        id: "ending_coverup",
        type: "ending",
        text: "You delete everything. Truth erased forever.",
        image: "server_dark",
        options: [{ text: "Play Again", next: "start" }]
      }

    }
  },
  island: {
    id: "island",
    title: "Stranded: Survival Protocol",
    description: "Your plane crashes. No signal. No help. Just you and the island.",
    color: "bg-green-700",
    scenes: {

      /* =========================
         PHASE 1 – CRASH SITE
      ==========================*/

      start: {
        id: "start",
        text: "You wake up on a beach. Your plane is burning behind you.",
        image: "beach_crash",
        options: [
          { text: "Search Wreckage", next: "wreckage_search" },
          { text: "Explore Jungle", next: "jungle_entry" },
          { text: "Climb Cliff", next: "cliff_view" }
        ]
      },

      wreckage_search: {
        id: "wreckage_search",
        text: "You search the plane wreckage.",
        options: [
          { text: "Take First Aid Kit", next: "first_aid" },
          { text: "Take Flare Gun", next: "flare_taken" },
          { text: "Stay Too Long", next: "fail_explosion" }
        ]
      },

      fail_explosion: {
        id: "fail_explosion",
        type: "fail",
        text: "Fuel tank explodes suddenly.",
        failMessage: "Too greedy.",
        options: [{ text: "Retry", next: "start" }]
      },

      first_aid: {
        id: "first_aid",
        text: "You patch yourself up.",
        options: [
          { text: "Explore Jungle", next: "jungle_entry" }
        ]
      },

      flare_taken: {
        id: "flare_taken",
        text: "You now have a flare gun.",
        options: [
          { text: "Explore Jungle", next: "jungle_entry" }
        ]
      },

      /* =========================
         PHASE 2 – JUNGLE
      ==========================*/

      jungle_entry: {
        id: "jungle_entry",
        text: "Dense jungle. Strange noises around.",
        options: [
          { text: "Follow River", next: "river_path" },
          { text: "Follow Animal Tracks", next: "animal_tracks" },
          { text: "Climb Tree", next: "tree_view" }
        ]
      },

      river_path: {
        id: "river_path",
        text: "You follow river and find waterfall.",
        options: [
          { text: "Go Behind Waterfall", next: "hidden_cave" },
          { text: "Drink Water", next: "fail_poisoned" }
        ]
      },

      fail_poisoned: {
        id: "fail_poisoned",
        type: "fail",
        text: "Water was contaminated.",
        failMessage: "Boil first.",
        options: [{ text: "Retry", next: "river_path" }]
      },

      animal_tracks: {
        id: "animal_tracks",
        text: "Tracks lead to a clearing.",
        options: [
          { text: "Set Trap", next: "food_success" },
          { text: "Approach Animal", next: "fail_attack" }
        ]
      },

      fail_attack: {
        id: "fail_attack",
        type: "fail",
        text: "Wild boar charges at you.",
        failMessage: "Nature wins.",
        options: [{ text: "Retry", next: "animal_tracks" }]
      },

      food_success: {
        id: "food_success",
        text: "You catch food successfully.",
        options: [
          { text: "Build Shelter", next: "build_shelter" }
        ]
      },

      tree_view: {
        id: "tree_view",
        text: "From top of tree you see smoke in distance.",
        options: [
          { text: "Go Toward Smoke", next: "tribe_encounter" },
          { text: "Ignore It", next: "build_shelter" }
        ]
      },

      /* =========================
         PHASE 3 – SURVIVAL CAMP
      ==========================*/

      build_shelter: {
        id: "build_shelter",
        text: "Night is coming. You must build shelter.",
        options: [
          { text: "Wood Shelter", next: "storm_night" },
          { text: "Cave Shelter", next: "hidden_cave" }
        ]
      },

      storm_night: {
        id: "storm_night",
        text: "A massive storm hits.",
        options: [
          { text: "Hold Shelter", next: "morning_after" },
          { text: "Run Outside", next: "fail_lightning" }
        ]
      },

      fail_lightning: {
        id: "fail_lightning",
        type: "fail",
        text: "Lightning strikes nearby.",
        failMessage: "Wrong move.",
        options: [{ text: "Retry", next: "storm_night" }]
      },

      morning_after: {
        id: "morning_after",
        text: "You survive the night.",
        options: [
          { text: "Search Coastline", next: "coast_signal" },
          { text: "Explore Deeper Jungle", next: "ancient_ruins" }
        ]
      },

      /* =========================
         TRIBE PATH
      ==========================*/

      tribe_encounter: {
        id: "tribe_encounter",
        text: "You encounter island tribe.",
        options: [
          { text: "Approach Peacefully", next: "tribe_alliance" },
          { text: "Run Away", next: "fail_hunted" }
        ]
      },

      fail_hunted: {
        id: "fail_hunted",
        type: "fail",
        text: "They chase and capture you.",
        failMessage: "Trust matters.",
        options: [{ text: "Retry", next: "tribe_encounter" }]
      },

      tribe_alliance: {
        id: "tribe_alliance",
        text: "They accept you and show secret bunker.",
        options: [
          { text: "Enter Bunker", next: "hidden_bunker" }
        ]
      },

      /* =========================
         SECRET BUNKER
      ==========================*/

      hidden_bunker: {
        id: "hidden_bunker",
        text: "Inside bunker you find old military lab.",
        options: [
          { text: "Activate Radio Tower", next: "ending_rescue" },
          { text: "Open Strange Door", next: "monster_release" }
        ]
      },

      monster_release: {
        id: "monster_release",
        text: "You release island creature accidentally.",
        options: [
          { text: "Fight", next: "fail_monster" },
          { text: "Escape Island", next: "ending_monster_escape" }
        ]
      },

      fail_monster: {
        id: "fail_monster",
        type: "fail",
        text: "Monster overpowers you.",
        failMessage: "Too strong.",
        options: [{ text: "Retry", next: "monster_release" }]
      },

      /* =========================
         COAST SIGNAL PATH
      ==========================*/

      coast_signal: {
        id: "coast_signal",
        text: "You see ship far away.",
        options: [
          { text: "Use Flare", next: "ending_rescue" },
          { text: "Swim Toward Ship", next: "fail_drown" }
        ]
      },

      fail_drown: {
        id: "fail_drown",
        type: "fail",
        text: "Currents too strong.",
        failMessage: "Bad idea.",
        options: [{ text: "Retry", next: "coast_signal" }]
      },

      /* =========================
         RUINS PATH
      ==========================*/

      ancient_ruins: {
        id: "ancient_ruins",
        text: "You discover ancient temple ruins.",
        options: [
          { text: "Solve Puzzle", next: "ending_treasure" },
          { text: "Take Artifact", next: "ending_cursed" }
        ]
      },

      /* =========================
         ENDINGS
      ==========================*/

      ending_rescue: {
        id: "ending_rescue",
        type: "ending",
        text: "Rescue team arrives. You're saved.",
        image: "rescue_helicopter",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_monster_escape: {
        id: "ending_monster_escape",
        type: "ending",
        text: "You escape, but monster reaches mainland.",
        image: "monster_escape",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_treasure: {
        id: "ending_treasure",
        type: "ending",
        text: "You uncover hidden island treasure.",
        image: "treasure_gold",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_cursed: {
        id: "ending_cursed",
        type: "ending",
        text: "Artifact curses you forever.",
        image: "cursed_temple",
        options: [{ text: "Play Again", next: "start" }]
      }

    }
  },
  gladiator: {
    id: "gladiator",
    title: "Arena of No Escape",
    description: "Captured. Chained. Thrown into the arena. Survive or become legend.",
    color: "bg-yellow-700",
    scenes: {

      /* =========================
         PHASE 1 – HOLDING CELL
      ==========================*/

      start: {
        id: "start",
        text: "You wake in a stone cell beneath the grand arena. The crowd roars above.",
        image: "arena_cell",
        options: [
          { text: "Train With Sword", next: "training_yard" },
          { text: "Talk to Fellow Prisoner", next: "prisoner_talk" },
          { text: "Attempt Escape Now", next: "fail_guard_spear" }
        ]
      },

      fail_guard_spear: {
        id: "fail_guard_spear",
        type: "fail",
        text: "A guard immediately stabs you with a spear.",
        failMessage: "Too early.",
        options: [{ text: "Retry", next: "start" }]
      },

      training_yard: {
        id: "training_yard",
        text: "You train intensely with wooden weapons.",
        options: [
          { text: "Focus on Strength", next: "arena_round1" },
          { text: "Focus on Speed", next: "arena_round1" }
        ]
      },

      prisoner_talk: {
        id: "prisoner_talk",
        text: "Another gladiator whispers about underground rebellion.",
        options: [
          { text: "Join Rebellion", next: "rebellion_plan" },
          { text: "Ignore and Train", next: "training_yard" }
        ]
      },

      rebellion_plan: {
        id: "rebellion_plan",
        text: "Plan is to steal keys during battle chaos.",
        options: [
          { text: "Agree", next: "arena_round1" }
        ]
      },

      /* =========================
         PHASE 2 – FIRST BATTLE
      ==========================*/

      arena_round1: {
        id: "arena_round1",
        text: "Arena gates open. You face a single opponent.",
        image: "arena_fight1",
        options: [
          { text: "Attack Aggressively", next: "crowd_cheer" },
          { text: "Defend and Wait", next: "crowd_boo" },
          { text: "Spare Opponent", next: "crowd_respect" }
        ]
      },

      crowd_cheer: {
        id: "crowd_cheer",
        text: "You defeat him brutally. Crowd roars.",
        options: [
          { text: "Bow to Crowd", next: "arena_round2" }
        ]
      },

      crowd_boo: {
        id: "crowd_boo",
        text: "Crowd boos at your defensive style.",
        options: [
          { text: "Finish Opponent", next: "arena_round2" }
        ]
      },

      crowd_respect: {
        id: "crowd_respect",
        text: "You spare him. Crowd is divided.",
        options: [
          { text: "Proceed", next: "arena_round2" }
        ]
      },

      /* =========================
         PHASE 3 – BEAST FIGHT
      ==========================*/

      arena_round2: {
        id: "arena_round2",
        text: "Next round: A massive lion is released.",
        image: "arena_lion",
        options: [
          { text: "Climb Pillar", next: "lion_strategy" },
          { text: "Fight Directly", next: "fail_lion_maul" }
        ]
      },

      fail_lion_maul: {
        id: "fail_lion_maul",
        type: "fail",
        text: "The lion overpowers you.",
        failMessage: "Too reckless.",
        options: [{ text: "Retry", next: "arena_round2" }]
      },

      lion_strategy: {
        id: "lion_strategy",
        text: "From pillar, you strike carefully and defeat lion.",
        options: [
          { text: "Celebrate", next: "emperor_notice" }
        ]
      },

      /* =========================
         PHASE 4 – EMPEROR TWIST
      ==========================*/

      emperor_notice: {
        id: "emperor_notice",
        text: "The Emperor notices you. He offers a deal.",
        options: [
          { text: "Accept Deal", next: "assassin_mission" },
          { text: "Refuse", next: "final_arena" }
        ]
      },

      assassin_mission: {
        id: "assassin_mission",
        text: "Emperor wants you to kill rival general secretly.",
        options: [
          { text: "Agree and Kill", next: "ending_champion" },
          { text: "Betray Emperor", next: "ending_revolution" }
        ]
      },

      final_arena: {
        id: "final_arena",
        text: "You face undefeated champion gladiator.",
        image: "arena_final",
        options: [
          { text: "Fight Honorably", next: "ending_legend" },
          { text: "Use Hidden Blade", next: "ending_dark_hero" }
        ]
      },

      /* =========================
         REBELLION PATH
      ==========================*/

      rebellion_execute: {
        id: "rebellion_execute",
        text: "You steal keys during chaos.",
        options: [
          { text: "Free Prisoners", next: "ending_revolution" }
        ]
      },

      /* =========================
         ENDINGS
      ==========================*/

      ending_legend: {
        id: "ending_legend",
        type: "ending",
        text: "You defeat champion honorably. Crowd names you Legend of Arena.",
        image: "legend_crown",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_dark_hero: {
        id: "ending_dark_hero",
        type: "ending",
        text: "You win using hidden blade. Feared but victorious.",
        image: "dark_gladiator",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_champion: {
        id: "ending_champion",
        type: "ending",
        text: "You become Emperor's assassin and royal champion.",
        image: "royal_guard",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_revolution: {
        id: "ending_revolution",
        type: "ending",
        text: "You start rebellion. Arena falls.",
        image: "arena_revolt",
        options: [{ text: "Play Again", next: "start" }]
      }

    }
  },
  cyberpunk: {
    id: "cyberpunk",
    title: "Neon Rebellion",
    description: "MegaCorp controls the city. You control the chaos.",
    color: "bg-purple-700",
    scenes: {

      /* =========================
         PHASE 1 – NEON SLUMS
      ==========================*/

      start: {
        id: "start",
        text: "Rain pours over Neon City. MegaCorp drones patrol the skies.",
        image: "neon_city",
        options: [
          { text: "Hack Street Terminal", next: "street_hack" },
          { text: "Meet Underground Dealer", next: "dealer_meet" },
          { text: "Storm MegaCorp Tower", next: "fail_turret" }
        ]
      },

      fail_turret: {
        id: "fail_turret",
        type: "fail",
        text: "Auto-turrets vaporize you instantly.",
        failMessage: "Too direct.",
        options: [{ text: "Retry", next: "start" }]
      },

      /* =========================
         HACKER PATH
      ==========================*/

      street_hack: {
        id: "street_hack",
        text: "You access city grid terminal.",
        options: [
          { text: "Disable Cameras", next: "city_blackout" },
          { text: "Trace MegaCorp Data", next: "data_leak" },
          { text: "Overload Terminal", next: "fail_shock" }
        ]
      },

      fail_shock: {
        id: "fail_shock",
        type: "fail",
        text: "Electrical surge fries your cyberdeck.",
        failMessage: "Wrong code.",
        options: [{ text: "Retry", next: "street_hack" }]
      },

      city_blackout: {
        id: "city_blackout",
        text: "Parts of the city go dark. Chaos begins.",
        options: [
          { text: "Infiltrate Tower", next: "tower_entry" }
        ]
      },

      data_leak: {
        id: "data_leak",
        text: "You uncover secret AI project called 'OMNI'.",
        options: [
          { text: "Expose Online", next: "ending_whistleblower" },
          { text: "Dig Deeper", next: "ai_core" }
        ]
      },

      /* =========================
         DEALER PATH
      ==========================*/

      dealer_meet: {
        id: "dealer_meet",
        text: "Dealer offers cyber upgrades.",
        options: [
          { text: "Buy Arm Implant", next: "combat_ready" },
          { text: "Buy Cloak Chip", next: "stealth_ready" },
          { text: "Refuse", next: "street_hack" }
        ]
      },

      combat_ready: {
        id: "combat_ready",
        text: "Your arm now has hidden blade.",
        options: [
          { text: "Attack Corp Patrol", next: "combat_scene" }
        ]
      },

      stealth_ready: {
        id: "stealth_ready",
        text: "You can turn partially invisible.",
        options: [
          { text: "Sneak Into Tower", next: "tower_entry" }
        ]
      },

      combat_scene: {
        id: "combat_scene",
        text: "You fight security bots.",
        options: [
          { text: "Push Forward", next: "tower_entry" },
          { text: "Retreat", next: "fail_surrounded" }
        ]
      },

      fail_surrounded: {
        id: "fail_surrounded",
        type: "fail",
        text: "Security overwhelms you.",
        failMessage: "Too many bots.",
        options: [{ text: "Retry", next: "combat_scene" }]
      },

      /* =========================
         PHASE 2 – MEGACORP TOWER
      ==========================*/

      tower_entry: {
        id: "tower_entry",
        text: "You enter MegaCorp Tower lobby.",
        image: "corporate_lobby",
        options: [
          { text: "Elevator", next: "fail_face_scan" },
          { text: "Ventilation", next: "vent_route" },
          { text: "Social Engineer", next: "fake_employee" }
        ]
      },

      fail_face_scan: {
        id: "fail_face_scan",
        type: "fail",
        text: "Facial recognition denies access.",
        failMessage: "Not in database.",
        options: [{ text: "Retry", next: "tower_entry" }]
      },

      vent_route: {
        id: "vent_route",
        text: "You crawl through vents.",
        options: [
          { text: "Drop into Server Room", next: "ai_core" },
          { text: "Drop into Lab", next: "cyborg_lab" }
        ]
      },

      fake_employee: {
        id: "fake_employee",
        text: "You bluff as an IT employee.",
        options: [
          { text: "Access Server Floor", next: "ai_core" },
          { text: "Overtalk Manager", next: "fail_suspicious" }
        ]
      },

      fail_suspicious: {
        id: "fail_suspicious",
        type: "fail",
        text: "Manager calls security.",
        failMessage: "Too nervous.",
        options: [{ text: "Retry", next: "fake_employee" }]
      },

      /* =========================
         AI CORE
      ==========================*/

      ai_core: {
        id: "ai_core",
        text: "You reach OMNI AI Core.",
        image: "ai_core",
        options: [
          { text: "Shut Down AI", next: "ending_revolution" },
          { text: "Merge With AI", next: "ending_ai_god" },
          { text: "Sell AI Data", next: "ending_mercenary" }
        ]
      },

      cyborg_lab: {
        id: "cyborg_lab",
        text: "You see humans turned into cyborg soldiers.",
        options: [
          { text: "Free Them", next: "ending_resistance" },
          { text: "Steal Prototype Suit", next: "ending_cyber_king" }
        ]
      },

      /* =========================
         ENDINGS
      ==========================*/

      ending_revolution: {
        id: "ending_revolution",
        type: "ending",
        text: "You shut down AI. City revolts against MegaCorp.",
        image: "city_revolt",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_ai_god: {
        id: "ending_ai_god",
        type: "ending",
        text: "You merge with OMNI. You control the city.",
        image: "digital_god",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_mercenary: {
        id: "ending_mercenary",
        type: "ending",
        text: "You sell data to rival corp. Become rich.",
        image: "cyber_money",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_resistance: {
        id: "ending_resistance",
        type: "ending",
        text: "You free cyborg soldiers. Resistance begins.",
        image: "cyborg_revolt",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_cyber_king: {
        id: "ending_cyber_king",
        type: "ending",
        text: "You take prototype suit and rule underground.",
        image: "cyber_king",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_whistleblower: {
        id: "ending_whistleblower",
        type: "ending",
        text: "Truth spreads online. MegaCorp collapses.",
        image: "data_exposed",
        options: [{ text: "Play Again", next: "start" }]
      }

    }
  },
  spaceStation: {
    id: "spaceStation",
    title: "Orbit of Betrayal",
    description: "A classified orbital station. A hidden mission. Something goes wrong.",
    color: "bg-indigo-700",
    scenes: {

      /* =========================
         PHASE 1 – DOCKING
      ==========================*/

      start: {
        id: "start",
        text: "Your shuttle docks with Orbital Station X-17. Something feels off.",
        image: "space_station_dock",
        options: [
          { text: "Enter Through Main Airlock", next: "main_airlock" },
          { text: "Spacewalk Entry", next: "spacewalk_entry" },
          { text: "Abort Mission", next: "fail_abort" }
        ]
      },

      fail_abort: {
        id: "fail_abort",
        type: "fail",
        text: "Command denies abort. Shuttle systems shut down.",
        failMessage: "No turning back.",
        options: [{ text: "Retry", next: "start" }]
      },

      main_airlock: {
        id: "main_airlock",
        text: "Airlock opens. Station is eerily silent.",
        options: [
          { text: "Check Control Room", next: "control_room" },
          { text: "Check Crew Quarters", next: "crew_quarters" }
        ]
      },

      spacewalk_entry: {
        id: "spacewalk_entry",
        text: "You float outside the station in zero gravity.",
        options: [
          { text: "Enter Maintenance Hatch", next: "maintenance_tunnel" },
          { text: "Drift Too Far", next: "fail_space_drift" }
        ]
      },

      fail_space_drift: {
        id: "fail_space_drift",
        type: "fail",
        text: "You drift endlessly into space.",
        failMessage: "No tether.",
        options: [{ text: "Retry", next: "spacewalk_entry" }]
      },

      /* =========================
         PHASE 2 – STATION MYSTERY
      ==========================*/

      control_room: {
        id: "control_room",
        text: "Screens flicker. AI system 'ARES' activates.",
        image: "space_control_room",
        options: [
          { text: "Talk to ARES", next: "ai_dialogue" },
          { text: "Disable AI Core", next: "ai_core_room" }
        ]
      },

      crew_quarters: {
        id: "crew_quarters",
        text: "Crew quarters are empty. Signs of struggle.",
        options: [
          { text: "Check Logs", next: "crew_logs" },
          { text: "Ignore and Move On", next: "control_room" }
        ]
      },

      crew_logs: {
        id: "crew_logs",
        text: "Logs mention 'alien specimen breach'.",
        options: [
          { text: "Investigate Lab", next: "alien_lab_space" }
        ]
      },

      maintenance_tunnel: {
        id: "maintenance_tunnel",
        text: "You crawl through narrow zero-g tunnel.",
        options: [
          { text: "Enter Reactor Room", next: "reactor_room" },
          { text: "Enter Lab", next: "alien_lab_space" }
        ]
      },

      /* =========================
         ALIEN LAB
      ==========================*/

      alien_lab_space: {
        id: "alien_lab_space",
        text: "You find broken containment pod.",
        image: "alien_space_lab",
        options: [
          { text: "Search Carefully", next: "alien_encounter" },
          { text: "Rush Forward", next: "fail_alien_attack" }
        ]
      },

      fail_alien_attack: {
        id: "fail_alien_attack",
        type: "fail",
        text: "Alien organism jumps onto you.",
        failMessage: "Too fast.",
        options: [{ text: "Retry", next: "alien_lab_space" }]
      },

      alien_encounter: {
        id: "alien_encounter",
        text: "You see the alien hiding in shadows.",
        options: [
          { text: "Seal Containment", next: "alien_captured" },
          { text: "Attempt Communication", next: "alien_friend_space" }
        ]
      },

      alien_captured: {
        id: "alien_captured",
        text: "You trap the organism again.",
        options: [
          { text: "Return to Control Room", next: "ai_dialogue" }
        ]
      },

      alien_friend_space: {
        id: "alien_friend_space",
        text: "Alien communicates telepathically.",
        options: [
          { text: "Help Alien Escape", next: "ending_alien_escape_space" },
          { text: "Betray Alien", next: "ending_corporate_bonus" }
        ]
      },

      /* =========================
         AI PATH
      ==========================*/

      ai_dialogue: {
        id: "ai_dialogue",
        text: "ARES says mission was sabotage by MegaCorp.",
        options: [
          { text: "Trust ARES", next: "ai_core_room" },
          { text: "Shut Down ARES", next: "fail_station_lockdown" }
        ]
      },

      fail_station_lockdown: {
        id: "fail_station_lockdown",
        type: "fail",
        text: "ARES locks entire station.",
        failMessage: "Wrong move.",
        options: [{ text: "Retry", next: "ai_dialogue" }]
      },

      ai_core_room: {
        id: "ai_core_room",
        text: "You reach AI Core chamber.",
        image: "ai_core_space",
        options: [
          { text: "Shut Down Station", next: "ending_station_destroyed" },
          { text: "Merge With ARES", next: "ending_space_god" },
          { text: "Upload Virus", next: "ending_rebellion_space" }
        ]
      },

      /* =========================
         REACTOR PATH
      ==========================*/

      reactor_room: {
        id: "reactor_room",
        text: "Reactor overheating.",
        options: [
          { text: "Stabilize Reactor", next: "ending_hero" },
          { text: "Escape Immediately", next: "fail_explosion_space" }
        ]
      },

      fail_explosion_space: {
        id: "fail_explosion_space",
        type: "fail",
        text: "Reactor explodes before you escape.",
        failMessage: "Too slow.",
        options: [{ text: "Retry", next: "reactor_room" }]
      },

      /* =========================
         ENDINGS
      ==========================*/

      ending_alien_escape_space: {
        id: "ending_alien_escape_space",
        type: "ending",
        text: "You help alien escape. Humanity never learns truth.",
        image: "ufo_departure",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_corporate_bonus: {
        id: "ending_corporate_bonus",
        type: "ending",
        text: "You capture alien and earn massive reward.",
        image: "space_money",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_station_destroyed: {
        id: "ending_station_destroyed",
        type: "ending",
        text: "You destroy station to prevent outbreak.",
        image: "station_explosion",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_space_god: {
        id: "ending_space_god",
        type: "ending",
        text: "You merge with ARES and control orbital network.",
        image: "digital_space_entity",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_rebellion_space: {
        id: "ending_rebellion_space",
        type: "ending",
        text: "You expose MegaCorp sabotage to Earth.",
        image: "earth_broadcast",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_hero: {
        id: "ending_hero",
        type: "ending",
        text: "You save the station and become space hero.",
        image: "space_hero",
        options: [{ text: "Play Again", next: "start" }]
      }

    }
  },
  spyMission: {
    id: "spyMission",
    title: "Shadow Protocol",
    description: "A classified mission. A stolen launch code. Trust no one.",
    color: "bg-gray-800",
    scenes: {

      /* =========================
         PHASE 1 – BRIEFING
      ==========================*/

      start: {
        id: "start",
        text: "Agency briefing: A rogue diplomat has stolen nuclear launch codes.",
        image: "spy_briefing_room",
        options: [
          { text: "Accept Mission", next: "city_arrival" },
          { text: "Refuse Mission", next: "fail_blacklisted" }
        ]
      },

      fail_blacklisted: {
        id: "fail_blacklisted",
        type: "fail",
        text: "You’re removed from agency permanently.",
        failMessage: "No second chances.",
        options: [{ text: "Retry", next: "start" }]
      },

      /* =========================
         PHASE 2 – CITY ARRIVAL
      ==========================*/

      city_arrival: {
        id: "city_arrival",
        text: "You arrive in a foreign capital under cover.",
        image: "spy_city_night",
        options: [
          { text: "Meet Informant", next: "informant_meet" },
          { text: "Scout Embassy", next: "embassy_outside" },
          { text: "Hack Traffic Grid", next: "traffic_hack" }
        ]
      },

      informant_meet: {
        id: "informant_meet",
        text: "Informant offers access card for a price.",
        options: [
          { text: "Pay Him", next: "access_card" },
          { text: "Threaten Him", next: "fail_police_alert" }
        ]
      },

      fail_police_alert: {
        id: "fail_police_alert",
        type: "fail",
        text: "He alerts local police.",
        failMessage: "Too aggressive.",
        options: [{ text: "Retry", next: "informant_meet" }]
      },

      access_card: {
        id: "access_card",
        text: "You now have embassy access card.",
        options: [
          { text: "Enter Embassy", next: "embassy_inside" }
        ]
      },

      traffic_hack: {
        id: "traffic_hack",
        text: "You control city traffic lights.",
        options: [
          { text: "Create Diversion", next: "embassy_inside" },
          { text: "Trace Diplomat Car", next: "car_chase" }
        ]
      },

      car_chase: {
        id: "car_chase",
        text: "High-speed pursuit begins.",
        options: [
          { text: "Disable Car Remotely", next: "capture_diplomat" },
          { text: "Ram Vehicle", next: "fail_crash" }
        ]
      },

      fail_crash: {
        id: "fail_crash",
        type: "fail",
        text: "Crash. Mission failed.",
        failMessage: "Too reckless.",
        options: [{ text: "Retry", next: "car_chase" }]
      },

      capture_diplomat: {
        id: "capture_diplomat",
        text: "You capture diplomat. He claims he's innocent.",
        options: [
          { text: "Trust Him", next: "double_agent_reveal" },
          { text: "Interrogate", next: "embassy_inside" }
        ]
      },

      /* =========================
         EMBASSY INFILTRATION
      ==========================*/

      embassy_outside: {
        id: "embassy_outside",
        text: "Embassy heavily guarded.",
        options: [
          { text: "Disguise as Guard", next: "embassy_inside" },
          { text: "Climb Wall", next: "fail_sniper_embassy" }
        ]
      },

      fail_sniper_embassy: {
        id: "fail_sniper_embassy",
        type: "fail",
        text: "Sniper spots you instantly.",
        failMessage: "Too exposed.",
        options: [{ text: "Retry", next: "embassy_outside" }]
      },

      embassy_inside: {
        id: "embassy_inside",
        text: "You're inside the embassy.",
        image: "spy_embassy_hall",
        options: [
          { text: "Server Room", next: "server_room_spy" },
          { text: "Diplomat Office", next: "office_secret" },
          { text: "Plant Bug", next: "hidden_listener" }
        ]
      },

      server_room_spy: {
        id: "server_room_spy",
        text: "You access classified server.",
        options: [
          { text: "Download Launch Codes", next: "launch_codes" },
          { text: "Upload Virus", next: "ending_cyber_spy" }
        ]
      },

      office_secret: {
        id: "office_secret",
        text: "You find hidden safe.",
        options: [
          { text: "Crack Safe", next: "launch_codes" },
          { text: "Ignore It", next: "hidden_listener" }
        ]
      },

      hidden_listener: {
        id: "hidden_listener",
        text: "You overhear conversation about double agent in your agency.",
        options: [
          { text: "Investigate", next: "double_agent_reveal" },
          { text: "Ignore and Complete Mission", next: "launch_codes" }
        ]
      },

      /* =========================
         DOUBLE AGENT PATH
      ==========================*/

      double_agent_reveal: {
        id: "double_agent_reveal",
        text: "Your own handler is mastermind behind theft.",
        options: [
          { text: "Expose Handler", next: "ending_true_hero" },
          { text: "Join Handler", next: "ending_shadow_master" }
        ]
      },

      launch_codes: {
        id: "launch_codes",
        text: "You obtain nuclear launch codes.",
        options: [
          { text: "Return to Agency", next: "ending_loyal_agent" },
          { text: "Sell Codes", next: "ending_mercenary_spy" },
          { text: "Destroy Codes", next: "ending_peacemaker" }
        ]
      },

      /* =========================
         ENDINGS
      ==========================*/

      ending_loyal_agent: {
        id: "ending_loyal_agent",
        type: "ending",
        text: "You return codes. Agency promotes you.",
        image: "spy_promotion",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_mercenary_spy: {
        id: "ending_mercenary_spy",
        type: "ending",
        text: "You sell codes on black market.",
        image: "spy_money",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_peacemaker: {
        id: "ending_peacemaker",
        type: "ending",
        text: "You destroy codes. Nuclear war prevented.",
        image: "peace_symbol",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_cyber_spy: {
        id: "ending_cyber_spy",
        type: "ending",
        text: "Your virus collapses foreign systems silently.",
        image: "digital_collapse",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_true_hero: {
        id: "ending_true_hero",
        type: "ending",
        text: "You expose double agent. Agency saved.",
        image: "spy_hero",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_shadow_master: {
        id: "ending_shadow_master",
        type: "ending",
        text: "You join mastermind and control global espionage.",
        image: "shadow_control",
        options: [{ text: "Play Again", next: "start" }]
      }

    }
  },
   medievalWar: {
    id: "medievalWar",
    title: "Throne of Ashes",
    description: "Two kingdoms. One crown. War decides everything.",
    color: "bg-red-900",
    scenes: {

      /* =========================
         PHASE 1 – ROYAL COURT
      ==========================*/

      start: {
        id: "start",
        text: "Your father, the King, has fallen in battle. The rival kingdom marches forward.",
        image: "castle_throne_room",
        options: [
          { text: "Claim Throne Immediately", next: "claim_throne" },
          { text: "Seek Council Advice", next: "royal_council" },
          { text: "Flee Castle", next: "fail_coward" }
        ]
      },

      fail_coward: {
        id: "fail_coward",
        type: "fail",
        text: "You abandon the kingdom. It falls within days.",
        failMessage: "A ruler must stand.",
        options: [{ text: "Retry", next: "start" }]
      },

      claim_throne: {
        id: "claim_throne",
        text: "You take the crown boldly.",
        options: [
          { text: "Prepare Army", next: "army_preparation" },
          { text: "Negotiate Peace", next: "peace_talks" }
        ]
      },

      royal_council: {
        id: "royal_council",
        text: "Council warns of traitor among nobles.",
        options: [
          { text: "Investigate Nobles", next: "traitor_hunt" },
          { text: "Focus on War", next: "army_preparation" }
        ]
      },

      /* =========================
         TRAITOR PATH
      ==========================*/

      traitor_hunt: {
        id: "traitor_hunt",
        text: "You discover Duke Roland secretly meeting enemy.",
        options: [
          { text: "Execute Him", next: "army_preparation" },
          { text: "Spare and Spy", next: "secret_information" }
        ]
      },

      secret_information: {
        id: "secret_information",
        text: "Roland feeds you enemy battle plans.",
        options: [
          { text: "Use Plans", next: "battlefield" }
        ]
      },

      /* =========================
         DIPLOMACY PATH
      ==========================*/

      peace_talks: {
        id: "peace_talks",
        text: "Enemy king proposes alliance marriage.",
        options: [
          { text: "Accept Alliance", next: "ending_united_kingdoms" },
          { text: "Reject Offer", next: "army_preparation" }
        ]
      },

      /* =========================
         PHASE 2 – ARMY PREPARATION
      ==========================*/

      army_preparation: {
        id: "army_preparation",
        text: "You gather knights and archers.",
        options: [
          { text: "Train Cavalry", next: "battlefield" },
          { text: "Fortify Castle", next: "castle_siege" },
          { text: "Seek Dragon Legend", next: "dragon_quest" }
        ]
      },

      /* =========================
         BATTLEFIELD PATH
      ==========================*/

      battlefield: {
        id: "battlefield",
        text: "Armies clash on open field.",
        image: "medieval_battle",
        options: [
          { text: "Lead From Front", next: "heroic_charge" },
          { text: "Strategic Retreat", next: "castle_siege" },
          { text: "Ambush From Forest", next: "ambush_success" }
        ]
      },

      heroic_charge: {
        id: "heroic_charge",
        text: "You fight bravely.",
        options: [
          { text: "Duel Enemy King", next: "ending_warrior_king" },
          { text: "Fall in Battle", next: "ending_martyr" }
        ]
      },

      ambush_success: {
        id: "ambush_success",
        text: "Your ambush devastates enemy forces.",
        options: [
          { text: "Push Forward", next: "ending_victory" }
        ]
      },

      /* =========================
         CASTLE SIEGE
      ==========================*/

      castle_siege: {
        id: "castle_siege",
        text: "Enemy surrounds your castle.",
        options: [
          { text: "Hold Walls", next: "ending_defender" },
          { text: "Secret Tunnel Escape", next: "dragon_quest" }
        ]
      },

      /* =========================
         DRAGON QUEST
      ==========================*/

      dragon_quest: {
        id: "dragon_quest",
        text: "Legend speaks of dragon in northern mountains.",
        image: "dragon_mountain",
        options: [
          { text: "Slay Dragon", next: "ending_dragon_slayer" },
          { text: "Tame Dragon", next: "ending_dragon_ruler" },
          { text: "Retreat", next: "fail_frozen" }
        ]
      },

      fail_frozen: {
        id: "fail_frozen",
        type: "fail",
        text: "You freeze in mountain storm.",
        failMessage: "Too harsh.",
        options: [{ text: "Retry", next: "dragon_quest" }]
      },

      /* =========================
         ENDINGS
      ==========================*/

      ending_victory: {
        id: "ending_victory",
        type: "ending",
        text: "You crush enemy forces and secure the throne.",
        image: "victory_banner",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_warrior_king: {
        id: "ending_warrior_king",
        type: "ending",
        text: "You defeat enemy king in duel and unite lands.",
        image: "duel_victory",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_martyr: {
        id: "ending_martyr",
        type: "ending",
        text: "You fall in battle but inspire generations.",
        image: "fallen_hero",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_defender: {
        id: "ending_defender",
        type: "ending",
        text: "Your castle holds. Enemy retreats.",
        image: "castle_defense",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_dragon_slayer: {
        id: "ending_dragon_slayer",
        type: "ending",
        text: "You slay dragon and return as legend.",
        image: "dragon_slayer",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_dragon_ruler: {
        id: "ending_dragon_ruler",
        type: "ending",
        text: "You tame dragon and rule all kingdoms.",
        image: "dragon_throne",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_united_kingdoms: {
        id: "ending_united_kingdoms",
        type: "ending",
        text: "Marriage alliance unites kingdoms peacefully.",
        image: "royal_wedding",
        options: [{ text: "Play Again", next: "start" }]
      }

    }
  },
   horrorMansion: {
    id: "horrorMansion",
    title: "Whispers of Blackwood Manor",
    description: "You enter the abandoned Blackwood Manor. Some doors should stay closed.",
    color: "bg-black",
    scenes: {

      /* =========================
         PHASE 1 – ENTRANCE
      ==========================*/

      start: {
        id: "start",
        text: "You stand before Blackwood Manor. The door creaks open slowly.",
        image: "haunted_mansion_exterior",
        options: [
          { text: "Enter Main Hall", next: "main_hall" },
          { text: "Check Backyard", next: "graveyard" },
          { text: "Leave Immediately", next: "fail_curse_follows" }
        ]
      },

      fail_curse_follows: {
        id: "fail_curse_follows",
        type: "fail",
        text: "You leave… but the whisper follows you home.",
        failMessage: "Too late.",
        options: [{ text: "Retry", next: "start" }]
      },

      /* =========================
         MAIN HALL
      ==========================*/

      main_hall: {
        id: "main_hall",
        text: "The chandelier flickers. A portrait’s eyes move.",
        image: "mansion_main_hall",
        options: [
          { text: "Inspect Portrait", next: "hidden_key" },
          { text: "Climb Upstairs", next: "upper_floor" },
          { text: "Enter Basement", next: "basement_entry" }
        ]
      },

      hidden_key: {
        id: "hidden_key",
        text: "Behind portrait, you find a rusted key.",
        options: [
          { text: "Go Upstairs", next: "upper_floor" }
        ]
      },

      /* =========================
         GRAVEYARD PATH
      ==========================*/

      graveyard: {
        id: "graveyard",
        text: "Backyard holds forgotten graves.",
        options: [
          { text: "Read Tombstone", next: "ghost_warning" },
          { text: "Dig Grave", next: "fail_hand_grab" }
        ]
      },

      fail_hand_grab: {
        id: "fail_hand_grab",
        type: "fail",
        text: "A skeletal hand grabs you.",
        failMessage: "Disturbing the dead.",
        options: [{ text: "Retry", next: "graveyard" }]
      },

      ghost_warning: {
        id: "ghost_warning",
        text: "A ghost appears and whispers: 'It’s not me… it’s below.'",
        options: [
          { text: "Return Inside", next: "basement_entry" }
        ]
      },

      /* =========================
         UPPER FLOOR
      ==========================*/

      upper_floor: {
        id: "upper_floor",
        text: "Hallway filled with locked doors.",
        options: [
          { text: "Open Locked Room", next: "child_room" },
          { text: "Enter Library", next: "library_room" }
        ]
      },

      child_room: {
        id: "child_room",
        text: "A music box plays by itself.",
        options: [
          { text: "Stop Music Box", next: "spirit_freed" },
          { text: "Ignore It", next: "fail_possession" }
        ]
      },

      fail_possession: {
        id: "fail_possession",
        type: "fail",
        text: "Dark spirit possesses you.",
        failMessage: "Mind lost.",
        options: [{ text: "Retry", next: "child_room" }]
      },

      spirit_freed: {
        id: "spirit_freed",
        text: "Child spirit thanks you.",
        options: [
          { text: "Ask About Basement", next: "basement_entry" }
        ]
      },

      library_room: {
        id: "library_room",
        text: "Ancient book mentions demon ritual.",
        options: [
          { text: "Read Ritual", next: "ritual_knowledge" },
          { text: "Burn Book", next: "fail_fire_spread" }
        ]
      },

      fail_fire_spread: {
        id: "fail_fire_spread",
        type: "fail",
        text: "Fire spreads uncontrollably.",
        failMessage: "Panic choice.",
        options: [{ text: "Retry", next: "library_room" }]
      },

      ritual_knowledge: {
        id: "ritual_knowledge",
        text: "You learn ritual can seal demon.",
        options: [
          { text: "Go Basement", next: "basement_entry" }
        ]
      },

      /* =========================
         BASEMENT
      ==========================*/

      basement_entry: {
        id: "basement_entry",
        text: "Basement smells of sulfur. A red symbol glows.",
        image: "mansion_basement",
        options: [
          { text: "Perform Ritual", next: "ending_sealed" },
          { text: "Confront Demon", next: "demon_encounter" },
          { text: "Run", next: "fail_darkness" }
        ]
      },

      fail_darkness: {
        id: "fail_darkness",
        type: "fail",
        text: "The darkness consumes you.",
        failMessage: "No escape.",
        options: [{ text: "Retry", next: "basement_entry" }]
      },

      demon_encounter: {
        id: "demon_encounter",
        text: "A shadow demon rises.",
        options: [
          { text: "Fight With Courage", next: "ending_hero" },
          { text: "Make Pact", next: "ending_dark_lord" }
        ]
      },

      /* =========================
         ENDINGS
      ==========================*/

      ending_sealed: {
        id: "ending_sealed",
        type: "ending",
        text: "You seal the demon. Manor becomes peaceful.",
        image: "mansion_cleansed",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_hero: {
        id: "ending_hero",
        type: "ending",
        text: "You defeat demon and free trapped souls.",
        image: "ghosts_freed",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_dark_lord: {
        id: "ending_dark_lord",
        type: "ending",
        text: "You make pact and become new ruler of darkness.",
        image: "dark_throne",
        options: [{ text: "Play Again", next: "start" }]
      }

    }
  },
  multiverse: {
    id: "multiverse",
    title: "Fracture of Realities",
    description: "Every choice you ever made echoes. The universes are collapsing.",
    color: "bg-gradient-to-r from-purple-900 to-black",
    scenes: {

      /* =========================
         PHASE 1 – REALITY BREAK
      ==========================*/

      start: {
        id: "start",
        text: "Reality glitches. Neon lights, dragons, spaceships, ghosts — all collide.",
        image: "multiverse_fracture",
        options: [
          { text: "Step Into Portal", next: "portal_hub" },
          { text: "Run Away", next: "fail_void" }
        ]
      },

      fail_void: {
        id: "fail_void",
        type: "fail",
        text: "The void swallows you.",
        failMessage: "No escape from destiny.",
        options: [{ text: "Retry", next: "start" }]
      },

      portal_hub: {
        id: "portal_hub",
        text: "You stand in a nexus hub. 10 portals glow.",
        options: [
          { text: "Cyberpunk Portal", next: "cyber_assist" },
          { text: "Medieval Portal", next: "dragon_assist" },
          { text: "Space Portal", next: "space_assist" },
          { text: "Heist Portal", next: "mastermind_assist" }
        ]
      },

      /* =========================
         HERO ALLIES
      ==========================*/

      cyber_assist: {
        id: "cyber_assist",
        text: "Neon rebel joins you with AI power.",
        options: [
          { text: "Return to Hub", next: "portal_hub_allies1" }
        ]
      },

      dragon_assist: {
        id: "dragon_assist",
        text: "Dragon rider pledges loyalty.",
        options: [
          { text: "Return to Hub", next: "portal_hub_allies2" }
        ]
      },

      space_assist: {
        id: "space_assist",
        text: "Space AI merges temporarily to guide you.",
        options: [
          { text: "Return to Hub", next: "portal_hub_allies3" }
        ]
      },

      mastermind_assist: {
        id: "mastermind_assist",
        text: "Master thief arrives with tactical genius.",
        options: [
          { text: "Return to Hub", next: "portal_hub_allies4" }
        ]
      },

      portal_hub_allies1: {
        id: "portal_hub_allies1",
        text: "With one ally, central portal activates faintly.",
        options: [
          { text: "Gather More Allies", next: "portal_hub" },
          { text: "Enter Central Rift", next: "rift_entry" }
        ]
      },

      portal_hub_allies2: {
        id: "portal_hub_allies2",
        text: "Dragon stands beside you.",
        options: [
          { text: "Gather More Allies", next: "portal_hub" },
          { text: "Enter Central Rift", next: "rift_entry" }
        ]
      },

      portal_hub_allies3: {
        id: "portal_hub_allies3",
        text: "AI calculates survival odds.",
        options: [
          { text: "Gather More Allies", next: "portal_hub" },
          { text: "Enter Central Rift", next: "rift_entry" }
        ]
      },

      portal_hub_allies4: {
        id: "portal_hub_allies4",
        text: "The mastermind smiles.",
        options: [
          { text: "Gather More Allies", next: "portal_hub" },
          { text: "Enter Central Rift", next: "rift_entry" }
        ]
      },

      /* =========================
         FINAL RIFT
      ==========================*/

      rift_entry: {
        id: "rift_entry",
        text: "Inside the rift, you see a shadow version of yourself.",
        image: "final_boss_shadow",
        options: [
          { text: "Attack Immediately", next: "fail_overpowered" },
          { text: "Use Combined Powers", next: "final_battle" },
          { text: "Talk To Shadow", next: "meta_reveal" }
        ]
      },

      fail_overpowered: {
        id: "fail_overpowered",
        type: "fail",
        text: "Shadow you controls every timeline.",
        failMessage: "Not strong enough alone.",
        options: [{ text: "Retry", next: "rift_entry" }]
      },

      final_battle: {
        id: "final_battle",
        text: "All allies combine powers.",
        options: [
          { text: "Seal Rift", next: "ending_savior" },
          { text: "Take Control of Rift", next: "ending_multiverse_ruler" }
        ]
      },

      meta_reveal: {
        id: "meta_reveal",
        text: "Shadow says: 'I am every failed choice you made.'",
        options: [
          { text: "Accept Responsibility", next: "ending_true_balance" },
          { text: "Reject Reality", next: "ending_chaos" }
        ]
      },

      /* =========================
         ENDINGS
      ==========================*/

      ending_savior: {
        id: "ending_savior",
        type: "ending",
        text: "You seal the rift. All universes saved.",
        image: "multiverse_saved",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_multiverse_ruler: {
        id: "ending_multiverse_ruler",
        type: "ending",
        text: "You control all timelines.",
        image: "cosmic_throne",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_true_balance: {
        id: "ending_true_balance",
        type: "ending",
        text: "You merge with shadow self and restore balance.",
        image: "balance_light_dark",
        options: [{ text: "Play Again", next: "start" }]
      },

      ending_chaos: {
        id: "ending_chaos",
        type: "ending",
        text: "You shatter realities. Infinite chaos begins.",
        image: "universe_shatter",
        options: [{ text: "Play Again", next: "start" }]
      }

    }
  }
}; 

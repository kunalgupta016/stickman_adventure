// Achievement definitions for all stories

export const achievements = [
  // === GENERAL ===
  { id: "first_blood", title: "First Blood", icon: "💀", description: "Die for the first time", condition: (stats) => Object.values(stats).some(s => s.deaths > 0) },
  { id: "serial_dier", title: "Serial Dier", icon: "☠️", description: "Die 10 times total", condition: (stats) => Object.values(stats).reduce((sum, s) => sum + s.deaths, 0) >= 10 },
  { id: "death_wish", title: "Death Wish", icon: "🪦", description: "Die 50 times total", condition: (stats) => Object.values(stats).reduce((sum, s) => sum + s.deaths, 0) >= 50 },
  { id: "completionist", title: "Completionist", icon: "🌟", description: "Complete all 11 stories", condition: (_, completed) => completed.length >= 11 },
  { id: "speedrunner", title: "Speedrunner", icon: "⚡", description: "Complete any story in under 30 seconds", condition: (stats) => Object.values(stats).some(s => s.bestTime && s.bestTime < 30) },
  { id: "explorer", title: "Explorer", icon: "🗺️", description: "Discover 10 different endings", condition: (stats) => Object.values(stats).reduce((sum, s) => sum + s.endings.length, 0) >= 10 },
  { id: "ending_hunter", title: "Ending Hunter", icon: "🔍", description: "Discover 30 different endings", condition: (stats) => Object.values(stats).reduce((sum, s) => sum + s.endings.length, 0) >= 30 },

  // === HEIST ===
  { id: "master_thief", title: "Master Thief", icon: "💰", description: "Complete the Heist story", condition: (_, completed) => completed.includes("heist") },
  { id: "heist_explorer", title: "Vault Veteran", icon: "🏦", description: "Find 3 heist endings", condition: (stats) => (stats.heist?.endings?.length || 0) >= 3 },

  // === PRISON ===
  { id: "jailbreaker", title: "Jailbreaker", icon: "⛓️", description: "Escape from prison", condition: (_, completed) => completed.includes("prison") },
  { id: "lockpick_pro", title: "Lockpick Pro", icon: "🔓", description: "Find 3 prison endings", condition: (stats) => (stats.prison?.endings?.length || 0) >= 3 },

  // === AREA 51 ===
  { id: "alien_contact", title: "Alien Contact", icon: "👽", description: "Complete the Area 51 story", condition: (_, completed) => completed.includes("area51") },

  // === ISLAND ===
  { id: "castaway", title: "Castaway", icon: "🏝️", description: "Survive the island", condition: (_, completed) => completed.includes("island") },

  // === GLADIATOR ===
  { id: "champion", title: "Arena Champion", icon: "⚔️", description: "Win the gladiator arena", condition: (_, completed) => completed.includes("gladiator") },
  { id: "gladiator_legend", title: "Gladiator Legend", icon: "🏆", description: "Find 3 gladiator endings", condition: (stats) => (stats.gladiator?.endings?.length || 0) >= 3 },

  // === CYBERPUNK ===
  { id: "neon_rebel", title: "Neon Rebel", icon: "🤖", description: "Complete the Cyberpunk story", condition: (_, completed) => completed.includes("cyberpunk") },

  // === SPACE STATION ===
  { id: "astronaut", title: "Astronaut", icon: "🚀", description: "Survive the space station", condition: (_, completed) => completed.includes("spaceStation") },

  // === SPY MISSION ===
  { id: "shadow_agent", title: "Shadow Agent", icon: "🕵️", description: "Complete the spy mission", condition: (_, completed) => completed.includes("spyMission") },
  { id: "double_agent", title: "Double Agent", icon: "🎭", description: "Find 3 spy endings", condition: (stats) => (stats.spyMission?.endings?.length || 0) >= 3 },

  // === MEDIEVAL WAR ===
  { id: "dragon_slayer", title: "Dragon Slayer", icon: "🐉", description: "Complete the Medieval War", condition: (_, completed) => completed.includes("medievalWar") },

  // === HORROR MANSION ===
  { id: "ghost_hunter", title: "Ghost Hunter", icon: "👻", description: "Survive Blackwood Manor", condition: (_, completed) => completed.includes("horrorMansion") },
  { id: "shadow_master", title: "Shadow Master", icon: "🌑", description: "Find 3 horror endings", condition: (stats) => (stats.horrorMansion?.endings?.length || 0) >= 3 },

  // === MULTIVERSE ===
  { id: "multiverse_savior", title: "Multiverse Savior", icon: "🌌", description: "Complete the Multiverse story", condition: (_, completed) => completed.includes("multiverse") },
  { id: "reality_bender", title: "Reality Bender", icon: "🌀", description: "Find all multiverse endings", condition: (stats) => (stats.multiverse?.endings?.length || 0) >= 4 },
  { id: "true_master", title: "True Master", icon: "👑", description: "Unlock every achievement", condition: () => false }, // checked separately
];

export const getTotalEndingsCount = (stats) =>
  Object.values(stats).reduce((sum, s) => sum + (s.endings?.length || 0), 0);

export const getTotalDeaths = (stats) =>
  Object.values(stats).reduce((sum, s) => sum + (s.deaths || 0), 0);

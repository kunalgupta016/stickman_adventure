// CrazyGames SDK wrapper for the Stickman Adventure game
// Docs: https://docs.crazygames.com/sdk/html5/
// The SDK script is loaded via index.html

class CrazyGamesSDK {
  constructor() {
    this.sdk = null;
    this.isAvailable = false;
    this._init();
  }

  async _init() {
    try {
      // The SDK exposes window.CrazyGames after script loads
      if (typeof window !== "undefined" && window.CrazyGames) {
        this.sdk = window.CrazyGames.SDK;
        await this.sdk.init();
        this.isAvailable = true;
        console.log("[CrazyGames] SDK initialized");
      } else {
        console.log("[CrazyGames] SDK not available (not on CrazyGames platform)");
      }
    } catch (e) {
      console.warn("[CrazyGames] SDK init failed:", e);
      this.isAvailable = false;
    }
  }

  // === GAME EVENTS ===

  /** Call when game starts loading */
  loadingStart() {
    if (!this.isAvailable) return;
    try {
      this.sdk.game.sdkGameLoadingStart();
    } catch (e) {
      console.warn("[CrazyGames] loadingStart error:", e);
    }
  }

  /** Call when game finishes loading */
  loadingStop() {
    if (!this.isAvailable) return;
    try {
      this.sdk.game.sdkGameLoadingStop();
    } catch (e) {
      console.warn("[CrazyGames] loadingStop error:", e);
    }
  }

  /** Call when gameplay starts (user starts playing) */
  gameplayStart() {
    if (!this.isAvailable) return;
    try {
      this.sdk.game.gameplayStart();
    } catch (e) {
      console.warn("[CrazyGames] gameplayStart error:", e);
    }
  }

  /** Call when gameplay stops (menu, pause, ending) */
  gameplayStop() {
    if (!this.isAvailable) return;
    try {
      this.sdk.game.gameplayStop();
    } catch (e) {
      console.warn("[CrazyGames] gameplayStop error:", e);
    }
  }

  // === ADS ===

  /** Show a midgame ad (between levels / on death) 
   *  Returns a promise that resolves when ad is done */
  async showMidgameAd() {
    if (!this.isAvailable) return;
    try {
      await this.sdk.ad.requestAd("midgame");
    } catch (e) {
      console.warn("[CrazyGames] midgame ad error:", e);
    }
  }

  /** Show a rewarded ad (for extra life, etc.)
   *  Returns true if the user watched the full ad */
  async showRewardedAd() {
    if (!this.isAvailable) return false;
    try {
      const result = await this.sdk.ad.requestAd("rewarded");
      return result === "watched";
    } catch (e) {
      console.warn("[CrazyGames] rewarded ad error:", e);
      return false;
    }
  }

  // === HAPPY TIME (celebration effect on CrazyGames) ===
  
  /** Trigger the CrazyGames confetti effect */
  happyTime() {
    if (!this.isAvailable) return;
    try {
      this.sdk.game.happytime();
    } catch (e) {
      console.warn("[CrazyGames] happytime error:", e);
    }
  }
}

// Singleton
const crazyGames = new CrazyGamesSDK();
export default crazyGames;

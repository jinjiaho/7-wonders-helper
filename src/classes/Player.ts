import type { VPComponents } from "../types";

export default class Player {
  name: string;
  vpComponents: VPComponents = {
    wonder: 0,
    treasure: 0,
    military: 0,
    blueCards: 0,
    yellowCards: 0,
    greenCards: 0,
    purpleCards: 0,
  };

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setVPComponent(key: keyof VPComponents, pts: number) {
    this.vpComponents[key] = pts;
  }

  getVPComponent(key: keyof VPComponents) {
    return this.vpComponents[key];
  }

  getTotalVP() {
    return Object.values(this.vpComponents).reduce((sum, component) => {
      return sum + component;
    }, 0);
  }
}

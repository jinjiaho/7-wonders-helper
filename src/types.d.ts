export interface VPComponents {
  wonder: number;
  treasure: number;
  military: number;
  blueCards: number;
  yellowCards: number;
  greenCards: number;
  purpleCards: number;
}

export type StepProps = {
  name: string;
  key: keyof VPComponents;
  description: string;
  imgPath: string;
  note?: string;
};

export interface AddPlayerEvent extends Event {
  detail: {
    playerName: string;
    playerColor: string;
  };
}

export interface NextStepEvent extends Event {
  detail: {
    title: string;
    description: string;
  };
}

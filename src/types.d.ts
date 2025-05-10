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

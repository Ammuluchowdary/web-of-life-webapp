declare module '@vimeo/player' {
  export default class Player {
    constructor(element: HTMLElement, options: {
      id: string;
      background?: boolean;
      autopause?: boolean;
      autoplay?: boolean;
      loop?: boolean;
      muted?: boolean;
      responsive?: boolean;
      dnt?: boolean;
    });
    on(event: string, callback: (error: unknown) => void): void;
    destroy(): void;
  }
} 
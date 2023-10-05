export interface Posts {
  categories?: [] | undefined;
  created_at: {
    [x: number]: string;
    toString: () => string;
    charAt: (pos: number) => string;
    charCodeAt: (index: number) => number;
    concat: (...strings: string[]) => string;
    length: number;
    pop: () => any;
    push: (...items: any[]) => number;
  };
  icon_url: String;
  id: String;
  updated_at: String;
  url: String;
  value: String;
}

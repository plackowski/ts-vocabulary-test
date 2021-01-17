import './main.scss';

export class Main {
  static hello = (name: string): string => {
    return `Hi, ${name}`;
  };
}

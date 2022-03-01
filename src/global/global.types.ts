export interface IParams {
  id: string;
}

export interface ILocation {
  pathname: string;
  state: {
    category: null | string;
  };
}

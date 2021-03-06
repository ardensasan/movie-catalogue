export interface Props {
  match: Match;
}

interface Match {
  params: Params;
}

interface Params {
  genreID?: string;
  language?: string;
  query?:string;
  page: string;
}

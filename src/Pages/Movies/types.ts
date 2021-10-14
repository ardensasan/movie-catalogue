export interface Props {
  match: Match;
}

interface Match {
  params: Params;
}
interface Params {
  page: string;
}

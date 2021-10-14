export interface Props{
    match: Match
}

interface Match{
    params:Params
}

interface Params{
    id:string
}
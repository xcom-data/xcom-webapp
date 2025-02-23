export type Sponsor = {
    id: string
    name: string
    isMainSponsor: boolean
    description: string
    // image: string
}

export type FAQ = {
    id: string
    question: string
    answer: string
}

export type BoardMember = {
    id: string
    name: string
    position: string
    mail: string
    image: string
}

export type programEvent = {
    id: string
    name: string
    time: string
    place: string
    description:string
}


export type programDay = {
    id: string
    date: string
    programevents: programEvent[]
}

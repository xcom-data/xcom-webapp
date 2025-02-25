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

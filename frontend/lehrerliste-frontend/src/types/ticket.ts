export interface Ticket {
    id: number,
    teacher: string,
    room: string,
    description: string,
    created: Date,
    priority: string,
    done: Boolean
}
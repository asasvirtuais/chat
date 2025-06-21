import { react } from 'asasvirtuais-apis/src/react.jsx'
import database from 'asasvirtuais-apis/src/database.js'
import z from 'zod'

export const schema = {
    chats: {
        readable: z.object({}),
        writeable: z.object({}),
    }
}

export const { table } = database(schema)

export const {
    DatabaseProvider,
    useDatabase,
    useTable,
} = react(schema)

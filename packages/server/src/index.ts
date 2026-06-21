import { Hono } from 'hono'

const app = new Hono()
app.get('/', (c) => c.text('Hello Bun hot reload!'))

export default app
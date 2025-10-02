/**
 * @author Augustus Rivers <hello@offlabel.design>
 */
import express from 'express'
const app = express()
app.get('/', (req, res) => res.json({ author: 'Augustus Rivers', site: 'https://offlabel.design' }))
app.listen(3000, () => console.log('Server running'))

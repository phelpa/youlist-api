import env from './config/env'
import { TypeOrmHelper } from '../infra/db/sqldb/helpers/typeorm-helper'
import app from './config/app'

TypeOrmHelper.connect()
  .then(async () => {
    app.listen(env.port, () =>
      console.log(`Server running at http://localhost:${env.port}`)
    )
  })
  .catch(console.error)

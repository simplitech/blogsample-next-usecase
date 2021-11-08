import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-micro'
import { NextApiRequest, NextApiResponse } from 'next'
import { buildSchema } from 'type-graphql'
import { createContext } from 'graphql/Context'
import resolvers from 'graphql/resolvers'
import { appAuthChecker } from 'graphql/AppAuthChecker'
import Cors from 'cors'

const cors = Cors({
  methods: ['GET', 'HEAD'],
})

const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const schema = await buildSchema({
    resolvers,
    authChecker: appAuthChecker,
    authMode: 'null',
    validate: false,
  })

  const apolloServer = new ApolloServer({
    context: createContext,
    schema,
    tracing: process.env.NODE_ENV === 'development',
  })

  await runMiddleware(req, res, cors)

  return apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}

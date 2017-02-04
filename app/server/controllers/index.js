export posts from './posts'
export tags from './tags'

export function registerRoutes(routes, ...controllers) {
  controllers.reduce((r, c) => c(r), routes)  
}

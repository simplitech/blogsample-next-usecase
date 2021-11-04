import { Context } from '../Context'

export class PostProcess {
  constructor(private ctx: Context) {}

  validateAuthorship(postId: number) {
    if (!this.ctx.user) {
      throw new Error('Not logged')
    }

    const ctxUserId = this.ctx.user.id
    const bdFoundPost = this.ctx.prisma.post.findFirst({
      where: {
        id: { equals: postId },
        author: { is: { id: { equals: ctxUserId } } },
      },
    })

    if (!bdFoundPost) {
      throw new Error('Not owner')
    }

    return bdFoundPost
  }
}

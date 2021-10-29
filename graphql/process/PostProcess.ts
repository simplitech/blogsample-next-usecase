import { Context } from '../Context'

export class PostProcess {
  constructor(private ctx: Context) {}

  validateAuthorship(postId: number) {
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

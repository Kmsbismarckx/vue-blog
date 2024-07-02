import { HttpClient } from '@/shared/api/HttpClient'
import type { AxiosRequestConfig } from 'axios'

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

type GetPostsResponse = {
  posts: Post[]
  totalCount: number
}

type GetPostsParams = { params: { _limit: string; _page: string } }

export class PostsService extends HttpClient {
  async getPosts(config?: AxiosRequestConfig & GetPostsParams): Promise<GetPostsResponse> {
    const response = await this.get<
      GetPostsResponse,
      AxiosRequestConfig<GetPostsResponse> & GetPostsParams
    >('https://jsonplaceholder.typicode.com/posts', config)

    return {
      posts: response.data ?? [],
      totalCount:
        response.headers &&
        Math.ceil(response.headers?.get('x-total-count') / config?.params._limit)
    }
  }
}

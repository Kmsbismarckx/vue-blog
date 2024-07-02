import axios from 'axios'

export class HttpClient {
  get = axios.get
  post = axios.post
  delete = axios.delete
}

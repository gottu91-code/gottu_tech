import { createClient } from 'newt-client-js'

export interface Article {
  id: number,
  slug: string,
  _sys: {
    createdAt: string,
    updatedAt: string
  },
  title: string,
  textarea: string,
  thumbnail: {
    src: string,
    width: number,
    height: number
  },
  category: {
    category: string
  }[]
}

export const newtClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: 'cdn',
})
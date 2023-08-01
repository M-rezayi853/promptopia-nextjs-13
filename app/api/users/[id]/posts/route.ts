import { NextApiRequest, NextApiResponse } from 'next'

import { connectToDB } from '@utils/database'
import Prompt from '@models/prompt'

export interface CustomNextApiResponse extends NextApiResponse {
  params: any
}

export const GET = async (
  req: NextApiRequest,
  // res: CustomNextApiResponse
  { params }
) => {
  try {
    await connectToDB()

    const prompts = await Prompt.find({
      creator: params.id,
    }).populate('creator')

    return new Response(JSON.stringify(prompts), { status: 200 })
  } catch (error) {
    return new Response('Failed to fetch all prompts', { status: 500 })
  }
}

import { useQuery } from 'react-query'

import { axios } from '@/lib/axios'
import { QueryConfig } from '@/lib/react-query'

import { Note } from '../types'

export const getNotes = (): Promise<Note[]> => {
  return axios.get('/notes')
}

type UseNotesOptions = {
  config?: QueryConfig<typeof getNotes>
}

export const useNotes = ({ config }: UseNotesOptions = {}) => {
  const queryConfig: QueryConfig<typeof getNotes> = {
    ...config,
    queryKey: ['notes'],
    queryFn: () => getNotes(),
  }
  return useQuery(queryConfig)
}

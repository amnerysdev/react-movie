import { describe, expect, it, vi } from 'vitest'
import { fetchMovies } from './movieService'

vi.stubGlobal('fetch', vi.fn())

describe('movieService', () => {
  it('fetches movies from TMDB', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ results: [{ id: 1, title: 'Test Movie' }] }),
    })

    const movies = await fetchMovies('test')
    expect(movies).toEqual([{ id: 1, title: 'Test Movie' }])
  })

  it('throws when TMDB returns an error', async () => {
    fetch.mockResolvedValueOnce({ ok: false, status: 500 })

    await expect(fetchMovies('test')).rejects.toThrow('TMDB request failed with status 500')
  })
})

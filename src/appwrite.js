import { Client, Databases, ID, Query } from 'appwrite'

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID;


const client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID)

const database = new Databases(client)

export const updateSearchCount = async (searchTerm, movie) => {
  const trimmedSearchTerm = searchTerm?.trim()

  if (!trimmedSearchTerm || !movie?.id) {
    return
  }

  try {
    const result = await database.listDocuments(
      DATABASE_ID,
      TABLE_ID,
      [Query.equal('searchTerm', trimmedSearchTerm)]
    )

    if (result.documents.length > 0) {
      const row = result.documents[0]

      await database.updateDocument(
        DATABASE_ID,
        TABLE_ID,
        row.$id,
        {
          count: Number(row.count || 0) + 1,
        }
      )
    } else {
      await database.createDocument(
        DATABASE_ID,
        TABLE_ID,
        ID.unique(),
        {
          searchTerm: trimmedSearchTerm,
          count: 1,
          movie_id: movie.id,
          poster_url: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : '',
        }
      )
    }
  } catch (error) {
    console.error('Failed to update Appwrite search count:', error)
  }
}

export const getTrendingMovies = async () => {
 try {
  const result = await database.listDocuments(DATABASE_ID, TABLE_ID, [
    Query.limit(5),
    Query.orderDesc("count")
  ])

  return result.documents;
 } catch (error) {
  console.error(error);
 }
}
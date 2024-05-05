import axios from 'axios'
import { useQuery } from "@tanstack/react-query"

//const allowCorsURL = 'https://api.allorigins.win/raw?url='
const podcastLimit = 100;
const one_day_in_ms = 86400000 

const cacheProperties = {
    cacheTime: one_day_in_ms,
    staleTime: one_day_in_ms 
}

export const usePodcastsData = () => useQuery({
    queryKey: ['allPodcasts'],
    queryFn: () =>
      axios
        .get(`https://itunes.apple.com/us/rss/toppodcasts/limit=${podcastLimit}/genre=1310/json`)
        .then((res) => res.data),
      ...cacheProperties
  })
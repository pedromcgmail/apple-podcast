import { useState } from'react'
import { Link } from 'react-router-dom'
import {usePodcastsData} from '../hooks/useFetchData'
import PodcastCard from '../components/PodcastCard'

const HomePage = () => {
    const [value, setValue] = useState('')

    const { isLoading, error, data, isFetching } = usePodcastsData()

   if (isLoading || isFetching || error) return <>Cargando...</>

   const filterFn = (item) => {
    return item['im:name'].label.toUpperCase().includes(value.toUpperCase()) || 
      item['im:artist'].label.toUpperCase().includes(value.toUpperCase()) || value === ''
  }

  console.log(data)
  const podcastList = data.feed.entry.filter(filterFn).map(entry => {
    return (
      <Link key={entry.id.label} to={`/podcast/${entry.id.attributes?.['im:id']}`}>
        <PodcastCard
          image={entry['im:image'][2].label}
          name={entry['im:name'].label}
          author={entry['im:artist'].label} />
      </Link>
    )
  })


  return (
    <div>
      <div className='mb-5 flex items-center justify-end'>
        <div className='flex items-center bg-blue-400 rounded text-bold h-7 mr-2 p-2 text-center font-bold text-2xl text-white'>{data.feed.entry.filter(filterFn).length}</div>
        <input
          type="search"
          className="relative m-0 block grow-0 w-80 min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent 
          bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] 
          text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary 
          focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:border-primary" 
          placeholder='Filter podcasts...'
          onChange={e => setValue(e.target.value.trim())} 
        />
          

      </div>
      <div className='grid grid-cols-4 gap-10'>
        {podcastList}
      </div>
    </div>
  )
}

export default HomePage

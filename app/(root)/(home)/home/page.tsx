'use client'

import MeetingTypeList from '@/components/MeetingTypeList';
import { useGetCalls } from '@/hooks/useGetCalls';
import { useEffect, useState } from 'react';
import { Call } from '@stream-io/video-react-sdk';

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-IN', { dateStyle: 'full' })).format(now);
  const { upcomingCalls } = useGetCalls();
  const [upComingCallTime, setUpComingCallTime] = useState('No upcoming meetings');


  useEffect(() => {
    if (upcomingCalls && upcomingCalls.length > 0) {
      const sortedCalls = [...upcomingCalls].sort((a: Call, b: Call) => {
        const dateA = new Date(a.state.startsAt ?? '');
        const dateB = new Date(a.state.startsAt ?? '');
        return dateA.getTime() - dateB.getTime();
      });

      const nextCall = sortedCalls[0];
      if (nextCall && nextCall.state.startsAt) {
        const nextCallDate = new Date(nextCall.state.startsAt);

        if (nextCallDate > now) {
          if (nextCallDate.toDateString() === now.toDateString()) {
            // If the call is today, show the time
            setUpComingCallTime(nextCallDate.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }));
          } else {
            // If the call is on a different day, show the date and time
            setUpComingCallTime(nextCallDate.toLocaleString('en-IN', { dateStyle: 'full', timeStyle: 'short' }));
          }
        } else {
          setUpComingCallTime('No upcoming meetings');
        }
      }
    }
  }, [upcomingCalls, now]);

  return (
    <>

      <section className='flex size-full flex-col gap-10 text-white h-[80vh]'>
        <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
          <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
            <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>
              {upComingCallTime === 'No upcoming meetings'
                ? upComingCallTime
                : `Upcoming meeting at: ${upComingCallTime}`}
            </h2>
            <div className='flex flex-col gap-2'>
              <h1 className='text-4xl font-extrabold lg:text-7xl'>
                {time}
              </h1>
              <p className='text-lg font-medium text-sky-1'>{date}</p>
            </div>
          </div>
        </div>
        <MeetingTypeList />
      </section>
    </>
  )
}

export default Home
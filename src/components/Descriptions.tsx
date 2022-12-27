import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function Descriptions() {
  const selected = useSelector((state: RootState) => state.major);

  return (
    <div className="w-full px-4 pt-6 flex flex-wrap justify-start">
      {selected.map((option) => {
        return (
          <div
            key={option.Rank}
            className="mx-auto w-full max-w-md rounded-2xl bg-white p-2"
          >
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>{option.Major}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <ul>
                      <li>
                        <span className="font-bold">
                          Rank by median earnings:
                        </span>{' '}
                        {option.Rank}
                      </li>
                      <li>
                        <span className="font-bold">
                          Total number of people with major:
                        </span>{' '}
                        {option.Total}
                      </li>
                      <li>
                        <span className="font-bold">
                          Employed 35 hours or more:
                        </span>{' '}
                        {option.Full_time}
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        );
      })}
    </div>
  );
}

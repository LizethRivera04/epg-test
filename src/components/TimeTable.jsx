import { useState } from "react";

import Proptypes from "prop-types";
import uniqid from "uniqid";

import useFetchChannels from "../hooks/useFetchChannels";
import { ShowDetail } from "./ShowDetail";
import { ShowList } from "./ShowList";
import { ChannelList } from "./ChannelList";
import { ScheduleBar } from "./ScheduleBar";
import { IconSpinner } from "./layout/IconSpinner";

import { IconTimes } from "./layout/IconTimes";

export const TimeTable = ({ setShowModal }) => {
  const [showDetail, setShowDetail] = useState({
    show: false,
    event: {},
  });

  const { channels, isLoading } = useFetchChannels();
  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full h-[calc(100%-1rem)] ">
        <div className="relative bg-white h-full rounded-lg shadow dark:bg-gray-700 overflow-x-auto">
          <div
            aria-label="div-close-modal"
            className="w-full flex justify-end"
            onClick={() => setShowModal(false)}
          >
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-12 h-12 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
            >
              <IconTimes />

              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {isLoading && <IconSpinner />}

          {showDetail.show && (
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <ShowDetail showDetail={showDetail} />
            </div>
          )}

          <div className="p-4 pt-0 md:p-0 md:pt-0 flex">
            <div className="pt-[44px]">
              {!isLoading &&
                channels.map((channel) => (
                  <div key={uniqid()} className="">
                    <div className="p-4 md:p-5 bg-gray-600 border-gray-900 border-solid flex items-center border-r-2 xs:w-24 xs:h-28 md:w-40">
                      <ChannelList channel={channel} />
                    </div>
                  </div>
                ))}
            </div>

            <div id="scroll-channels" className="overflow-y-auto">
              {!isLoading && (
                <>
                  <div id="schedule">
                    <ScheduleBar channels={channels} />
                  </div>

                  {channels.map((channel) => (
                    <div key={uniqid()} className="">
                      <div className="">
                        <ShowList
                          key={uniqid()}
                          events={channel.events}
                          setShowDetail={setShowDetail}
                        />
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TimeTable.propTypes = {
  setShowModal: Proptypes.func.isRequired,
};

import Proptypes from "prop-types";

import dayjs from "dayjs";
import uniqid from "uniqid";
import { getDaysBetween } from "../utils/scheduleData";

export const ScheduleBar = ({ channels }) => {
  const start = dayjs(channels[0].events[0].date_begin);
  // start.setHours(9, 0, 0, 0);
  const end = dayjs(
    channels[channels.length - 1].events[
      channels[channels.length - 1].events.length - 1
    ].date_end
  );
  const scheduleData = getDaysBetween(start, end);

  return (
    <div className="flex h-11 w-fit bg-gray-800">
      <div className=" py-2 w-[calc(100%-160px)] flex ">
        {scheduleData.map((schedule) => (
          <div className="px-11" key={uniqid()}>
            {schedule}
          </div>
        ))}
      </div>
    </div>
  );
};

ScheduleBar.propTypes = {
  channels: Proptypes.array.isRequired,
};

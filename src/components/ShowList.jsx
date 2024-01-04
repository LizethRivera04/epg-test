import Proptypes from "prop-types";
import dayjs from "dayjs";
import uniqid from "uniqid";

export const ShowList = ({ events, setShowDetail }) => {
  return (
    <>
      <div className="flex w-fit">
        {events.map((event) => (
          <div
            aria-label="div-show"
            key={uniqid()}
            className="p-8 border-gray-300 border-solid border-[1px] w-64 cursor-pointer"
            onMouseEnter={() => setShowDetail({ show: true, event: event })}
          >
            <p>{event.name}</p>
            <span>{dayjs(event.date_begin).format("HH:mm")}</span>-
            <span>{dayjs(event.date_end).format("HH:mm")}</span>
          </div>
        ))}
      </div>
    </>
  );
};

ShowList.propTypes = {
  events: Proptypes.array.isRequired,
  setShowDetail: Proptypes.func.isRequired,
};

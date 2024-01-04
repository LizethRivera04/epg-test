import Proptypes from "prop-types";

import dayjs from "dayjs";

export const ShowDetail = ({ showDetail }) => {
  const { event } = showDetail;
  const dateBegin = dayjs(event.date_begin);
  const dateEnd = dayjs(event.date_end);
  return (
    <div className="flex justify-start flex-col xs:w-full md:w-1/2 p-4 md:p-5 items-start">
      <h1>{event.name}</h1>
      <div className="mt-5 text-start">
        <p aria-label="schedule-tag">
          {dayjs(dateBegin).format("HH:mm")}hrs a{" "}
          {dayjs(dateEnd).format("HH:mm")}hrs {dateBegin.diff(dateEnd, "hours")}
          hr
        </p>
        <p className="">
          Veniam reprehenderit officia ex exercitation dolore aute pariatur
          labore magna eu pariatur. Quis laborum amet nostrud sit quis. Occaecat
          aute voluptate aliquip labore ipsum qui occaecat et cillum id.
          Excepteur ea ea fugiat eiusmod quis dolore elit mollit elit. Non sunt
          sit ex ipsum consectetur esse et dolor sint anim ipsum Lorem
          reprehenderit. Cillum nulla ea commodo qui sunt minim exercitation
          consequat fugiat sunt ad duis ipsum. Aliquip elit qui ad officia magna
          commodo eu ex ipsum fugiat.
        </p>
      </div>
    </div>
  );
};

ShowDetail.propTypes = {
  showDetail: Proptypes.object.isRequired,
};

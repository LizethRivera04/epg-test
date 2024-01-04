import Proptypes from "prop-types";

export const ChannelList = ({ channel }) => {
  const { number, name, image } = channel;
  return (
    <>
      <div className="">
        <div className="flex max-w-32 drop-shadow-lg justify-between">
          <p>{number}</p>
          <img className="max-w-20" src={image} alt={name} />
        </div>
      </div>
    </>
  );
};

ChannelList.propTypes = {
  channel: Proptypes.object.isRequired,
};

import { FC } from "react";

interface PicturesProps {
  data: {
    src: string,
    title: string,
    description: string,
  }[],
  onClick: (index: number) => void;
}

const Pictures: FC<PicturesProps> = (props) => {
  const { data, onClick } = props;

  const handleClickPicture = (index: number) => {
    onClick(index);
  };

  return (
    <div className="pictures-container">
      {data.map((slides, index) => (
        <div
          onClick={() => handleClickPicture(index)} // Виправлено, щоб викликати функцію
          key={index}
          className="picture"
        >
          <img src={slides.src} alt={slides.description} />
        </div>
      ))}
    </div>
  );
};

export default Pictures;

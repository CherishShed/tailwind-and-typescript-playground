import { TextRevise, capitalizeFirstLetter } from "../../utils/functions";
type CardProps = {
  image: string;
  title: string;
  category: string;
  description: string;
};
export const Card = ({ image, title, category, description }: CardProps) => {
  return (
    <div className="card max-h-full h-full overflow-hidden pb-2 max-w-full w-10/12">
      <img src={image} alt="" className="rounded-t-lg max-h-52 h-52" />
      <div className="px-2 overflow-ellipsis max-w-full border-t-2">
        <h3
          className="text-base font-bold text-left h-14 max-w-full pb-4 item-title border-b-2 border-red-400"
          id="item-title"
        >
          {TextRevise(title, 45)}
        </h3>
        <h5 className="text-justify font-semibold max-h-8 h-8 text-ellipsis">
          {capitalizeFirstLetter(category)}
        </h5>
        <p className="text-sm text-left h-9 max-h-10 max-w-max">
          {TextRevise(description, 80)}
        </p>
      </div>
    </div>
  );
};

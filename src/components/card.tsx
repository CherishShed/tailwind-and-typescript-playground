import { TextRevise } from "../../utils/functions";
type CardProps = {
  image: string;
  title: string;
  category: string;
  description: string;
};
export const Card = ({ image, title, category, description }: CardProps) => {
  return (
    <div className="card max-h-80 h-80 overflow-hidden pb-2">
      <img src={image} alt="" className="rounded-t-lg max-h-52 h-52" />
      <div className="px-2 overflow-ellipsis max-w-full border-t-2">
        <h3
          className="text-base font-bold text-justify h-10 max-w-full pb-1 item-title"
          id="item-title"
        >
          {TextRevise(title, 50)}
        </h3>
        <h5 className="text-justify font-semibold overflow-hidden max-h-8 h-8 text-ellipsis">
          {category}
        </h5>
        <p className="text-sm text-left h-9 text-ellipsis max-h-10 max-w-max">
          {description}
        </p>
      </div>
    </div>
  );
};

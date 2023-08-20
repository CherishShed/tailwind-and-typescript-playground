type CardProps = {
  image: string;
  title: string;
  description: string;
  content: string;
};
export const Card = ({ image, title, description, content }: CardProps) => {
  return (
    <div className="card">
      <img src={image} alt="" className="rounded-t-lg" />
      <div className="px-2">
        <h3 className="text-zinc-950 text-xl font-bold text-justify">
          {title}
        </h3>
        <h5 className="text-lg text-justify font-semibold">{description}</h5>
        <p className="text-sm text-justify">{content}</p>
      </div>
    </div>
  );
};

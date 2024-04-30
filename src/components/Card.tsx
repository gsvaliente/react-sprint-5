import { TutorialData } from "../types/tutorialData.type";

type CardProps = {
  data: TutorialData;
  onNextStep: () => void;
};

export const Card = ({ data, onNextStep }: CardProps) => {
  const { bgColor, description, image, title } = data;
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <p>{description}</p>

      <button onClick={onNextStep}>Next</button>
    </div>
  );
};

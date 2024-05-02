import { tutorialData } from '../data/tutorialData';
import { TutorialData } from '../types/tutorialData.type';
import { ArrowButton } from './ArrowButton';
import { Indicator } from './Indicator';

type CardProps = {
  currStep: number;
  data: TutorialData;
  onNextStep: () => void;
  onPrevStep: () => void;
  onIndicator: (idx: number) => void;
};

export const Card = ({
  data,
  onNextStep,
  onPrevStep,
  currStep,
  onIndicator,
}: CardProps) => {
  const { bgColor, description, image, title } = data;

  return (
    <div className='card w-96 max-w-80 md:max-w-96 h-xl bg-base-100 shadow-xl bordered-t-'>
      <div
        style={{ background: bgColor }}
        className='rounded-t-2xl'
      >
        <figure className='min-h-82 md:min-h-96'>
          <img
            src={image}
            alt={title}
          />
        </figure>
      </div>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
        <Indicator
          data={tutorialData}
          currStep={currStep}
          func={onIndicator}
        />
        <div className='card-actions justify-end mt-8'>
          {currStep === 2 && (
            <ArrowButton
              func={onPrevStep}
              position='left'
            />
          )}
          {currStep === 1 && (
            <>
              <ArrowButton
                func={onPrevStep}
                position='left'
              />
              <ArrowButton func={onNextStep} />
            </>
          )}
          {currStep === 0 && <ArrowButton func={onNextStep} />}
        </div>
      </div>
    </div>
  );
};

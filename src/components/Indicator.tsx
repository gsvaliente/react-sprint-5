import { RxShadowOuter, RxTarget } from 'react-icons/rx';
import { TutorialData } from '../types/tutorialData.type';

type IndicatorProps = {
  data: TutorialData[];
  currStep: number;
};

export const Indicator = ({ data, currStep }: IndicatorProps) => {
  return (
    <div className='flex absolute bottom-12'>
      {data.map((el, idx) => {
        const isActive = idx === currStep;
        return (
          <span key={el.title}>
            {isActive ? <RxTarget /> : <RxShadowOuter />}
          </span>
        );
      })}
    </div>
  );
};

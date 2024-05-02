import { RxShadowOuter, RxTarget } from 'react-icons/rx';
import { TutorialData } from '../types/tutorialData.type';

type IndicatorProps = {
  data: TutorialData[];
  currStep: number;
  func: (idx: number) => void;
};

export const Indicator = ({ data, currStep, func }: IndicatorProps) => {
  return (
    <div className='flex absolute bottom-12 '>
      {data.map((el, idx) => {
        const isActive = idx === currStep;
        return (
          <span
            className='mr-1'
            key={el.title}
            onClick={() => func(idx)}
          >
            {isActive ? <RxTarget /> : <RxShadowOuter />}
          </span>
        );
      })}
    </div>
  );
};

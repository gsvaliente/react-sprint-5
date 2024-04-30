import { RxShadowOuter, RxTarget } from 'react-icons/rx';

type IndicatorProps = {
  currStep: number;
  index: number;
};

export const Indicator = ({ currStep, index }: IndicatorProps) => {
  const isActive = currStep === index;

  return <>{isActive ? <RxTarget /> : <RxShadowOuter />}</>;
};

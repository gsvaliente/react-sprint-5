import { RxArrowLeft, RxArrowRight } from 'react-icons/rx';
type ArrowButtonProps = {
  func: () => void;
  position?: 'left' | 'right';
};

export const ArrowButton = ({ func, position = 'right' }: ArrowButtonProps) => {
  return (
    <button
      onClick={func}
      className='btn btn-circle btn-outline'
    >
      {position === 'right' ? <RxArrowRight /> : <RxArrowLeft />}
    </button>
  );
};

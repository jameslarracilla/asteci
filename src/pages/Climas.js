import { climaActions } from '../store/clima-slice';
import ClimaTable from '../components/ClimaTable';
import { useDispatch, useSelector } from 'react-redux';
import './Climas.scss';

const Climas = () => {
  const totalOfPages = useSelector((state) => state.clima.totalOfPages);
  const total = useSelector((state) => state.clima.total);
  const currentPage = useSelector((state) => state.clima.page);

  const dispatch = useDispatch();

  const onNextPageHandler = () => {
    dispatch(climaActions.nextPage());
  };

  const onPrevPageHandler = () => {
    dispatch(climaActions.prevPage());
  };

  return (
    <div className="climas">
      <ClimaTable />
      <div className="climas__actions">
        {currentPage > 0 && <button onClick={onPrevPageHandler}>&larr;</button>}
        {currentPage < totalOfPages - 1 && (
          <button onClick={onNextPageHandler}>&rarr;</button>
        )}
      </div>
      <div className="climas__pagination">
        {currentPage + 1 + '/' + totalOfPages}
      </div>
      <div className="climas__registros">{`Total de registros: ${total}`}</div>
    </div>
  );
};

export default Climas;

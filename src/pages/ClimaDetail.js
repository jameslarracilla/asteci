import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchSelectedClima } from '../store/clima-actions';
import './ClimaDetail.scss';

const ClimaDetail = () => {
  const { climaId } = useParams();
  const dispatch = useDispatch();
  const selectedClima = useSelector((state) => state.clima.selectedClima);

  const labels = Object.keys(selectedClima);

  const fields = labels.map((lab) => {
    return (
      <p className="clima-detail__field" key={lab}>
        <span className="clima-detail__field-label">{lab + ': '}</span>
        <span className="clima-detail__field-value">{`${selectedClima[lab]}`}</span>
      </p>
    );
  });

  useEffect(() => {
    dispatch(fetchSelectedClima(climaId));
  }, [dispatch, climaId]);

  return (
    <div className="clima-detail">
      <div className="clima-detail__card">
        <p className="clima-detail__title">{selectedClima._id}</p>
        <div>{fields}</div>
      </div>

      <Link to="/climas" className="clima-detail__home">
        Home
      </Link>
    </div>
  );
};

export default ClimaDetail;

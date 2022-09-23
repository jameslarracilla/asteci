import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClimas } from '../store/clima-actions';
import ClimaItem from './ClimaItem';
import './ClimaTable.scss';

const ClimaTable = () => {
  const dispatch = useDispatch();
  const climas = useSelector((state) => state.clima.climasToRender);

  const renderedClimas = climas.map((cli) => (
    <ClimaItem key={cli._id} data={cli} />
  ));

  const tableHeaders = (
    <tr>
      <th>_id</th>
      <th>cityid</th>
      <th>name</th>
      <th>state</th>
      <th>probability of precip</th>
      <th>relative humidity</th>
      <th>Lastreporttime</th>
      <th>Llueve</th>
    </tr>
  );

  useEffect(() => {
    dispatch(fetchClimas());
  }, [dispatch]);

  return (
    <table className="clima-table">
      <thead>{tableHeaders}</thead>
      <tbody>{renderedClimas}</tbody>
    </table>
  );
};

export default ClimaTable;

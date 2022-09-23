import { Link } from 'react-router-dom';
import './ClimaItem.scss';

const ClimaItem = ({ data }) => {
  const year = data.lastreporttime.slice(0, 4);
  const month = data.lastreporttime.slice(4, 6);
  const day = data.lastreporttime.slice(6, 8);
  const formatedDate = year + '/' + month + '/' + day;

  const llueve =
    data.probabilityofprecip > 6 || data.relativehumidity > 50 ? 'Si' : 'No';

  return (
    <tr className="clima-item">
      <td>
        <Link to={`/climas/${data._id}`}>{data._id}</Link>
      </td>
      <td>{data.cityid}</td>
      <td>{data.name}</td>
      <td>{data.state}</td>
      <td>{data.probabilityofprecip}</td>
      <td>{data.relativehumidity}</td>
      <td>{formatedDate}</td>
      <td>{llueve}</td>
    </tr>
  );
};

export default ClimaItem;

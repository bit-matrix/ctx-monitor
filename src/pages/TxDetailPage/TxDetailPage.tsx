import { useParams } from "react-router-dom";
import { TX_DETAIL } from "../../app/ROUTE";

export const TxDetailPage = () => {
  document.title = TX_DETAIL.TITLE;

  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <div>{id}</div>
    </div>
  );
};

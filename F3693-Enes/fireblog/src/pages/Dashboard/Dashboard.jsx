import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";

import DashboardVeri from "../../helpers/DashboardVeri";
import { Cards, HomeCon } from "./Dashboard-styled";

function Dashboard() {
  // const { login } = useSelector((s) => s.login);
  const { modal } = useSelector((s) => s.modal);

  const [data, setData] = useState("");

  useEffect(() => {
    DashboardVeri(setData);
  }, []);

  // console.log(data?.data);
  return (
    <HomeCon>
      {modal && <Modal en={data} />}
      <h3>Dashboard</h3>
      
      <Cards>
        {data?.data ? (
          data?.data?.map((e, index) => <Card key={index} e={index} en={e} />)
        ) : (
          <div>veri yok</div>
        )}
      </Cards>
    </HomeCon>
  );
}

export default Dashboard;

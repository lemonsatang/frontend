import axios from "axios"; //액시오스 객체
import { useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]); // 유저 객체 배열

  // 백엔드에서 유저들을 가져오는 함수
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    console.log(result);
  };
  loadUsers();
  return (
    <div className="container">
      <table className="table border shadow my-4">
        <thead>
          <tr className="table-info">
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

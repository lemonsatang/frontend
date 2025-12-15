import axios from "axios"; //액시오스 객체
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]); // 유저 객체 배열

  // 백엔드에서 유저들을 가져오는 함수
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };
  useEffect(() => {
    loadUsers();
  }, []);

  const deleteUser = async (id) => {
    if (confirm("정말로 삭제하시겠습니까?")) {
      await axios.delete(`http://localhost:8080/users/${id}`);
      loadUsers();
    }
  };

  return (
    <div className="container">
      <table className="table table-hover border table-border shadow my-4 text-center">
        <thead>
          <tr className="table-info">
            <th scope="col">#</th>
            <th scope="col">이름</th>
            <th scope="col">유저네임</th>
            <th scope="col">이메일</th>
            <th scope="col">액션</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  className="btn btn-outline-secondary mx-2"
                  to={`/viewuser/${user.id}`}
                >
                  보기
                </Link>
                <Link
                  className="btn btn-outline-warning mx-2"
                  to={`/edituser/${user.id}`}
                >
                  수정
                </Link>
                <button
                  className="btn btn-outline-danger mx-2"
                  onClick={() => deleteUser(user.id)}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

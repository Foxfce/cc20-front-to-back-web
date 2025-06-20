import { useEffect, useState } from "react";
import { actionDeleteUser, actionListUsers, actionUpdateRole } from "../../api/user"
import useAuthStore from "../../stores/authStore";
import { createAlert } from "../../utils/createAlert";
import { Trash2 } from "lucide-react";
import Swal from "sweetalert2";

// rfce
function Manage() {
  // JS
  const token = useAuthStore(state => state.token);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers(token);
  }, [])

  const fetchUsers = async (token) => {
    try {
      const res = await actionListUsers(token)
      // console.log(res.data.result);
      setUsers([...res.data.result]);
    } catch (error) {
      console.log('error :', error)
    }
  }

  const hdlUpdateRole = async (token, id, role, name) => {
    // console.log(token, id, role);
    try {
      const res = await actionUpdateRole(token, id, { role });
      // console.log(res);
      const updatedName = name.split(' ')[0];
      createAlert('success', `Updated ${updatedName} Success!`, 1300);
    } catch (error) {
      console.log(error);
    }
  }

  const hdlDeleteUser = async (token, id) => {
    const { isConfirmed } = await Swal.fire({
      icon: "question",
      text: "Are you sure?",
      showCancelButton: true,
      showCloseButton: true,
    });

    if (isConfirmed) {
      try {
        const res = await actionDeleteUser(token, id);
        console.log(res);
        createAlert('success', res.data.message);
        fetchUsers(token);

      } catch (error) {
        console.log(error);

      }
    }
  };

  return (
    <div>

      <table className="table-auto w-full">

        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {users.map((item, index) => {
            return (
              <tr key={index}>
                <td className="text-center">{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>

                <td>
                  <select
                    onChange={(e) => hdlUpdateRole(token, item.id, e.target.value, item.name)}
                    defaultValue={item.role}
                    className="w-full"
                  >
                    <option>USER</option>
                    <option>ADMIN</option>
                  </select>
                </td>

                <td className="items-center justify-center">
                  <Trash2 onClick={() => hdlDeleteUser(token, item.id)} color="red" />

                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Manage
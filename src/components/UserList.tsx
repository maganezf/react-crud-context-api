import React from 'react';
import { useGlobalContext } from '../contexts/GlobalState';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const UserList: React.FC = () => {
  const { currentState, removeUser } = useGlobalContext();

  const users = currentState.users;

  return (
    <ListGroup className="mt-4 ">
      {users.map((user, key) =>
        users.length > 0 ? (
          <ListGroupItem className="d-flex" key={key}>
            <strong className="m-auto">{user.name}</strong>

            <Link
              to={`/edit/${user.id}`}
              color="warning"
              className="btn btn-warning mr5"
            >
              Edit
            </Link>

            <Button color="danger" onClick={() => removeUser(user.id)}>
              Delete
            </Button>
          </ListGroupItem>
        ) : (
          <h4 className="text-center">No Users</h4>
        )
      )}
    </ListGroup>
  );
};

export default UserList;

import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Header from '../components/Header';

import { useGlobalContext } from '../contexts/GlobalState';
import { IUser, IParams } from '../types';

const EditUser: React.FC = () => {
  const history = useHistory();

  const { currentState, editUser } = useGlobalContext();
  const users = currentState.users;
  const params: IParams = useParams();

  const [selectedUser, setSelectedUser] = useState<IUser>({
    id: '',
    name: '',
  });

  const currentUserId = params.id;

  useEffect(() => {
    const userId = currentUserId;
    const findSelectedUser: any = users.find(
      user => user.id === Number(userId)
    );
    setSelectedUser(findSelectedUser);
  }, [currentUserId, users]);

  function onSubmit() {
    editUser(selectedUser);

    // console.log('new user edited:', editUser);
    history.push('/');
  }

  const onChangeEditUser = (
    event: ChangeEvent<HTMLFormElement | HTMLInputElement>
  ) => {
    event.preventDefault();

    setSelectedUser({
      ...selectedUser,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Header />

      <Form onSubmit={onSubmit}>
        <FormGroup className="mb-2">
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            // value={selectedUser.name}
            onChange={onChangeEditUser}
            placeholder="Enter new name"
            required
          />
        </FormGroup>

        <Button type="submit" className="mr5">
          Done
        </Button>

        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </Form>
    </>
  );
};

export default EditUser;

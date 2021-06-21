import React, { ChangeEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Header from '../components/Header';

import { v4 as uuid } from 'uuid';
import { useGlobalContext } from '../contexts/GlobalState';
import { IUser } from '../types';

const AddUser: React.FC = () => {
  const [name, setName] = useState<string>('');

  const history = useHistory();
  const { addUser } = useGlobalContext();

  function onSubmit() {
    const newUser: IUser = {
      id: uuid(),
      name,
    };

    addUser(newUser);

    // console.log('new user added:', addUser);
    history.push('/');
  }

  const onChangeAddUser = (
    event: ChangeEvent<HTMLFormElement | HTMLInputElement>
  ) => {
    event.preventDefault();
    setName(event.target.value);
  };

  return (
    <>
      <Header />

      <Form onSubmit={onSubmit}>
        <FormGroup className="mb-2">
          <Label>Name</Label>
          <Input
            type="text"
            onChange={onChangeAddUser}
            placeholder="Enter name"
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

export default AddUser;
